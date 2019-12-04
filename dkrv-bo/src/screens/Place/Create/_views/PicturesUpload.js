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

export const PlacePicturesUpload = ({ addToStore, stepperStore, handleNext }) => <PicturesUploader host={"localhost:9400/upload"} addToStore={addToStore} store={stepperStore} handleDone={handleNext}/>;