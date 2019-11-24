import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation } from "@apollo/react-hooks";
import { CloudUpload } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { UPLOAD_PICTURES } from "../../../../network";
import axios from "axios";

const sendRequest = file => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    const formData = new FormData();
    formData.append("file", file, file.name);

    req.open("POST", "http://localhost:8000/upload");
    req.send(formData);
  });
};

export const PlacePicturesUpload = ({ stepperStore }) => {
  let [files, setFiles] = useState();

  const { enqueueSnackbar } = useSnackbar();

  const onSub = async () => {
    console.log("files log", files);
    var formData = new FormData();

    files.map((file, index) => {
      formData.append(`file${index}`, file);
    });

    try {
      const resp = await axios({
        url: "http://localhost:3400/upload",
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log("response log", resp);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form>
      <div>GraphQL Test</div>
      <input
        name="multiplefiles"
        type="file"
        multiple
        onChange={e => setFiles(e.target.files)}
      />
      <Button
        variant="contained"
        color="default"
        onClick={onSub}
        startIcon={<CloudUpload />}
      >
        Upload
      </Button>
    </form>
  );
};
