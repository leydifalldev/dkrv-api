import React from "react";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";

export const FormComponent = ({
  formLabel,
  initialValues,
  formComponent,
  handleSubmit,
  validationSchema
}) => {
  const renderContent = props => (
    <form onSubmit={props.handleSubmit}>
      {React.cloneElement(formComponent, {
        handleChange: props.handleChange,
        handleBlur: props.handleBlur,
        values: props.values,
        errors: props.errors
      })}
      <div>
        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>Retour</Button>
          <Button 
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          > {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </form>
  );

  return <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            render={renderContent}
          />
   
};
