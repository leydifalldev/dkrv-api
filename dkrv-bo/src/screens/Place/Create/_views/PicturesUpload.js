import React, { useState, Fragment } from "react";
import { useSnackbar } from "notistack";
import uuid from "react-uuid";
import { CloudUpload } from "@material-ui/icons";
import {
  Button,
  Card,
  CardMedia,
  CardActions,
  makeStyles
} from "@material-ui/core";
import axios from "axios";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
  media: {
    height: 190,
    width: 200
  }
}));

export const PlacePicturesUpload = ({ stepperStore, host }) => {
  const classes = useStyles();
  let [files, setFiles] = useState([]);
  let [mainPicture, setMainPicture] = useState(0);

  const handleSubmit = async () => {
    var formData = new FormData();
    files.map(file => {
      delete file.local;
      return file;
    });
    formData.append("files", files);
    console.log("formData", formData);
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
  };

  const removeFromQueue = (e, fileToRmIndex) => {
    e.preventDefault();
    files = files.filter((file, index) => index !== fileToRmIndex);
    setFiles(files);
  };

  return (
    <form>
      <div style={imagePanelStyle}>
        {files ? (
          files.map((image, index) => (
            <UploaderThumbnail
              key={index}
              classes={classes}
              style={thumbnailStyle}
              src={image.local}
              leftButtonAction={e => removeFromQueue(e, index)}
              rightButtonAction={e => setMainPicture(index)}
            />
          ))
        ) : (
          <span>Panel vide</span>
        )}
      </div>
      <input
        name="multiplefiles"
        type="file"
        multiple
        onChange={e => addFileToQueue(Array.from(e.target.files))}
      />
      <Button
        variant="contained"
        color="default"
        onClick={handleSubmit}
        startIcon={<CloudUpload />}
      >
        Upload
      </Button>
    </form>
  );
};

const imagePanelStyle = {
  display: "flex",
  flexWrap: "wrap"
};

const thumbnailStyle = {
  width: 200,
  marginLeft: 5
};

const UploaderThumbnail = ({
  classes,
  src,
  height,
  leftButtonAction,
  rightButtonAction
}) => (
  <Card>
    {src ? (
      <CardMedia className={classes.media} image={src} title="Paella dish" />
    ) : (
      <Skeleton
        variant="rect"
        className={classes.media}
        height={height || 180}
      />
    )}
    <CardActions>
      <Button size="small" color="primary" onClick={leftButtonAction}>
        Supprimer
      </Button>
      <Button size="small" color="primary" onClick={rightButtonAction}>
        Principale
      </Button>
    </CardActions>
  </Card>
);

const ThumbnailImage = ({ src, height, classes }) =>
  src ? (
    <CardMedia className={classes.media} image={src} title="Paella dish" />
  ) : (
    <Skeleton variant="rect" className={classes.media} height={height || 180} />
  );
