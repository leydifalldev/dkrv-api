import React from "react";
import { FormatAlignJustify } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import { StepperComponent } from "../../../../components";
import AddProductToPlace from "./ProductForm";

const stepsConfig = {
  label: "Ajout product",
  steps: [
    {
      name: "Fiche produit",
      component: <AddProductToPlace />,
      icon: <FormatAlignJustify />
    }
  ]
};

const CreatePlaceStepper = ({ setTemplate }) => {
  return (
    <div>
      <StepperComponent onFinish={setTemplate} stepsConfig={stepsConfig} />
    </div>
  );
};

export default CreatePlaceStepper;
