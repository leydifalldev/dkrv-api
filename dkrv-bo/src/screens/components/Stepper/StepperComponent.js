import React from "react";
import { StepLabel, Stepper, Step } from "@material-ui/core";
import { ColorlibConnector } from "./Connector";
import { stepperStyles, componentStyle } from "./styles";
import { CustomStepIcon } from "./Icons";

export const StepperComponent = ({ stepsConfig }) => {
  const classes = stepperStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [stepperStore, setStepperStore] = React.useState({});

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return stepsConfig && stepsConfig.steps && stepsConfig.steps.length > 0 ? (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {stepsConfig.steps.map(step => (
          <Step key={step.name}>
            <StepLabel icon={step.icon} StepIconComponent={CustomStepIcon}>
              {step.name}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.instructions}>
        {React.cloneElement(stepsConfig.steps[activeStep].component, {
          handleNext,
          handleBack,
          handleReset,
          stepperStore,
          setStepperStore
        })}
      </div>
    </div>
  ) : (
    <h4>Mauvaise configuration du stepper</h4>
  );
};
