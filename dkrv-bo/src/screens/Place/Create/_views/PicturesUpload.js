import React, { useState, Fragment } from "react";
import { useSnackbar } from "notistack";
import uuid from 'react-uuid';
import { CloudUpload } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import axios from "axios";
import { Thumbnail } from "../../../components";

export const PlacePicturesUpload = ({ stepperStore, host }) => {
  let [files, setFiles] = useState([]);
  var formData = new FormData();
  const { enqueueSnackbar } = useSnackbar();

  const onSub = async () => {
    try {
      const resp = await axios({
        url: host || "http://localhost:3400/upload",
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

  const addFileToQueue = newfiles => {
    newfiles = newfiles.map(newfile => {
      newfile.local = URL.createObjectURL(newfile);
      return newfile;
    });
    setFiles([...files, ...newfiles]);
    console.log("newfiles seco", files);
  }

  const removeFromQueue = fileToRemove => {
    //files = files.filter(file => file.name = fileToRemove.name);
    //setFiles(files);
    console.log('files LOG', fileToRemove);
  };

  return (
    <form>
      <div style={imagePanelStyle}>{files ? files.map((image, index) => <Thumbnail key={index} leftButton={ButtonGroup} style={thumbnailStyle} src={image.local}/>):<span>Panel vide</span>}</div>
      <input
        name="multiplefiles"
        type="file"
        multiple
        onChange={e => addFileToQueue(Array.from(e.target.files))}
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

const ButtonGroup = ({leftButtonAction}) => (
  <CardActions>
    <Button onClick={leftButtonAction} size="small" color="primary">Supprimer</Button>
    <Button size="small" color="primary">Principale</Button>
  </CardActions>
);

const imagePanelStyle = {
  display: "flex",
  flexWrap: "wrap"
}

const thumbnailStyle = {
  width: 200,
  marginLeft: 5
}

const UploaderThumbnail = () => {

}

