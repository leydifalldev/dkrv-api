import React from "react";
import { Typography } from "@material-ui/core";
import {
  AddPhotoAlternate,
  AssignmentTurnedIn,
  FormatAlignJustify
} from "@material-ui/icons";
import { StepperComponent } from "../../../components/Stepper";
import { PlaceForm } from "./PlaceForm";
import { PlacePicturesUpload } from "./PicturesUpload";
import { ResumePanel } from "./Resume";

const stepsConfig = {
  label: "Ajout product",
  steps: [
    {
      name: "Fiche produit",
      component: <PlaceForm />,
      icon: <FormatAlignJustify />
    },
    {
      name: "Photos",
      component: <PlacePicturesUpload />,
      icon: <AddPhotoAlternate />
    },
    {
      name: "Récapitulatif",
      component: <ResumePanel />,
      icon: <AssignmentTurnedIn />
    }
  ]
};

export const CreatePlaceStepper = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom align="left" color="primary">
        Nouvelle Place
      </Typography>
      <StepperComponent stepsConfig={stepsConfig} />
    </div>
  );
};
