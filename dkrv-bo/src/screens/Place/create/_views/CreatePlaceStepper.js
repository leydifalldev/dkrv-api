import React from "react";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { StepperComponent } from "../../../components/Stepper";
import { PlaceForm } from "./PlaceForm";
import { PlacePicturesUpload } from "./PicturesUpload";

const stepsConfig = {
  label: "Ajout product",
  steps: [
    {
      name: "Fiche produit",
      component: <PlaceForm />,
      icon: <FormatAlignJustifyIcon />
    },
    {
      name: "Photos",
      component: <PlacePicturesUpload />,
      icon: <AddPhotoAlternateIcon />
    }
  ]
};

export const CreatePlaceStepper = () => {
  return <StepperComponent stepsConfig={stepsConfig} />;
};
