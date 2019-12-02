package main

import (
	"fmt"
	"io"
	"log"
	"mime/multipart"
	"net/http"
	"os"
)

func main() {
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	http.HandleFunc("/upload", uploadHandler)

	log.Println("Listening...")
	http.ListenAndServe(":3400", nil)
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "GET, POST,OPTIONS")
}

func uploadHandler(w http.ResponseWriter, r *http.Request) {
	log.Print("uploadHandler log")
	enableCors(&w)
	err := r.ParseMultipartForm(200000)
	if err != nil {
		fmt.Fprintln(w, err)
		return
	}

	formdata := r.MultipartForm
	files := formdata.File["multiplefiles"]
	//id := formdata.
	log.Print(formdata)
	for i, _ := range files {
		file, err := files[i].Open()
		log.Print(file)
		defer file.Close()
		if err != nil {
			fmt.Fprintln(w, err)
		}
		createFile(file)
		out, err := os.Create("./staticd/" + files[i].Filename)
		//log.Print(files[i])
		defer out.Close()
		if err != nil {
			errorHandler(err)
			_, _ = os.Create("./staticd/" + files[i].Filename)
		}
		log.Print("after errorHandler")
		_, err = io.Copy(out, file)
		if err != nil {
			log.Print("Mkdir done")
			log.Print(err)
			return
		}
		fmt.Fprintf(w, "Files uploaded successfully : ")
		fmt.Fprintf(w, files[i].Filename+"\n")
	}
}

func createFile(file multipart.File) {
}

func errorHandler(err error) {
	if err != nil {
		fmt.Println(err)
		fmt.Print("Unable to create the file for writing. Check your write access privilege")
		_, err := os.Stat("./staticd/")
		if os.IsNotExist(err) {
			err := os.Mkdir("./staticd", os.ModePerm)
			log.Print("Mkdir done")
			log.Print(err)
		}
	}
}
