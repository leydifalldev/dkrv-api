package main

import (
	"fmt"
	"html/template"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	http.HandleFunc("/", serveTemplate)
	http.HandleFunc("/upload", uploadHandler)

	log.Println("Listening...")
	http.ListenAndServe(":3000", nil)
}

func uploadHandler(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(200000)
	if err != nil {
		fmt.Fprintln(w, err)
		return
	}

	formdata := r.MultipartForm
	files := formdata.File["multiplefiles"]
	log.Print("files log")
	log.Print(files)
	for i, _ := range files {
		file, err := files[i].Open()
		defer file.Close()
		if err != nil {
			fmt.Fprintln(w, err)
		}
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

func serveTemplate(w http.ResponseWriter, r *http.Request) {
	lp := filepath.Join("templates", "layout.html")
	fp := filepath.Join("templates", filepath.Clean(r.URL.Path))

	// Return a 404 if the template doesn't exist
	info, err := os.Stat(fp)
	if err != nil {
		if os.IsNotExist(err) {
			http.NotFound(w, r)
			return
		}
	}

	// Return a 404 if the request is for a directory
	if info.IsDir() {
		http.NotFound(w, r)
		return
	}

	tmpl, err := template.ParseFiles(lp, fp)
	if err != nil {
		// Log the detailed error
		log.Println(err.Error())
		// Return a generic "Internal Server Error" message
		http.Error(w, http.StatusText(500), 500)
		return
	}

	if err := tmpl.ExecuteTemplate(w, "layout", nil); err != nil {
		log.Println(err.Error())
		http.Error(w, http.StatusText(500), 500)
	}
}
