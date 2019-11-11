import React from "react";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { StepperComponent } from "../../../components/Stepper";

const Test = () => (
  <h3>Test</h3>
);

const stepsConfig = {
  label: "Ajout product",
  steps: [
    { name: "Fiche produit", component: <Test />, icon: <FormatAlignJustifyIcon/> },
    { name: "Photos", component: <Test />, icon: <AddPhotoAlternateIcon/> }
  ]
};

export const CreatePlaceStepper = () => {
  return <StepperComponent stepsConfig={stepsConfig}/>;
};
