import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { VideoLabel, Check } from "@material-ui/icons";
import StepConnector from "@material-ui/core/StepConnector";

import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { AddProductToPlace } from "../AddProductToPlace";

const Test = () => <h2>HelLo component</h2>;

const steps = {
  label: "Ajout product",
  steps: [
    { name: "Fiche produit", component: <AddProductToPlace /> },
    { name: "Photos", component: <Test /> }
  ]
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: theme.shadows[3]
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
  }
}));

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <FormatAlignJustifyIcon />,
    2: <AddPhotoAlternateIcon />,
    3: <VideoLabel />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#FFFFFF"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#FFFFFF"
  }
}));

const CreateProductStepper = () => {
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
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              {step.name}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.instructions}>
        {React.cloneElement(steps.steps[activeStep].component)}
      </div>
    </div>
  );
};

export default CreateProductStepper;
