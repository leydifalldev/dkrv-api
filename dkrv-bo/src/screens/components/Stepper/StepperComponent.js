import React from "react";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { ColorlibConnector } from "./Connector";
import { useStyles } from "./styles";
import { CustomStepIcon } from './Icons';

export const StepperComponent = ({stepsConfig}) => {
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

  return (stepsConfig && stepsConfig.steps.length && stepsConfig.steps.length > 0) ? (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {stepsConfig.steps.map(step => (
          <Step key={step.name}>
            <StepLabel icon={step.icon} StepIconComponent={CustomStepIcon}>{step.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.instructions}>
        {React.cloneElement(stepsConfig.steps[activeStep].component, {handleNext, handleBack, handleReset})}
      </div>
    </div>
  ) : <h4>Mauvaise configuration du stepper</h4>;
};
