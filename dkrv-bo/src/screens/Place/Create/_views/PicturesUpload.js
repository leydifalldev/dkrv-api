import React, { useState, Fragment } from "react";
import {
  makeStyles
} from "@material-ui/core";
import { PicturesUploader } from "../../../components";

const useStyles = makeStyles(theme => ({
  media: {
    height: 190,
    width: 200
  }
}));

export const PlacePicturesUpload = ({ stepperStore, handleNext }) => <PicturesUploader host={"localhost:9400/upload"} store={stepperStore} handleDone={handleNext}/>;