import React from "react";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import { AddPhotoAlternate, AssignmentTurnedIn } from "@material-ui/icons";
import { StepperComponent } from "../../../components/Stepper";
import { PlaceForm } from "./PlaceForm";
import { PlacePicturesUpload } from "./PicturesUpload";
import { ResumePanel } from "./Resume";

const stepsConfig = {
  label: "Ajout product",
  steps: [
    {
      name: "Récapitulatif",
      component: <ResumePanel />,
      icon: <AssignmentTurnedIn />
    },
    {
      name: "Fiche produit",
      component: <PlaceForm />,
      icon: <FormatAlignJustifyIcon />
    },
    {
      name: "Photos",
      component: <PlacePicturesUpload />,
      icon: <AddPhotoAlternate />
    }
  ]
};

export const CreatePlaceStepper = () => {
  return <StepperComponent stepsConfig={stepsConfig} />;
};
