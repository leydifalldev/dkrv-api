import React from "react";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { ColorlibStepIcon } from "./Icons";
import { ColorlibConnector } from "./Connector";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { useStyles } from "./styles";

const Test = () => <div>Test</div>;

const steps = {
  label: "Ajout product",
  steps: [
    { name: "Fiche produit", component: <Test /> },
    { name: "Photos", component: <Test /> }
  ]
};

export const StepperComponent = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.steps.map(step => (
          <Step key={step.name}>
            <StepLabel icon={<GroupAddIcon />}>{step.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.instructions}>
        {React.cloneElement(steps.steps[activeStep].component)}
      </div>
    </div>
  );
};
