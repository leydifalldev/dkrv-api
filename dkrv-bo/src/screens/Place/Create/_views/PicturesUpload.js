import React from "react";
import { PicturesUploader } from "../../../components";

export const PlacePicturesUpload = ({
  addToStore,
  stepperStore,
  handleNext
}) => (
  <PicturesUploader
    host={"localhost:9400/upload"}
    addToStore={addToStore}
    store={stepperStore}
    handleDone={handleNext}
  />
);
