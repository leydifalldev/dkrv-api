import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation } from "@apollo/react-hooks";
import { CloudUpload } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { UPLOAD_PICTURES } from "../../../../network";

export const PlacePicturesUpload = ({ stepperStore }) => {
  let [files, setFiles] = useState();

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async () => {
    console.log(files);
    try {
      const response = await fetch("http://localhost:3400/upload", {
        // Your POST endpoint
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: {
          multiplefiles: files
        } // This is your file object
      });

      console.log("response log", response);
    } catch (e) {
      enqueueSnackbar(String(e), { variant: "error" });
    }
  };

  const onSub = test => {
    console.log("test", test);
  };

  return (
    <form onSubmit={onSub}>
      <div>GraphQL Test</div>
      <input type="file" multiple />
      <Button
        type="submit"
        variant="contained"
        color="default"
        startIcon={<CloudUpload />}
      >
        Upload
      </Button>
    </form>
  );
};
