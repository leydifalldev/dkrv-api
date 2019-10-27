import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import { Formik } from "formik";

export const ModalFormComponent = ({
  formLabel,
  initialValues,
  formComponent,
  handleSubmit,
  validationSchema
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderContent = props => (
    <form onSubmit={props.handleSubmit}>
      {React.cloneElement(formComponent, {
        handleChange: props.handleChange,
        handleBlur: props.handleBlur,
        values: props.values,
        errors: props.errors
      })}
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Annuler
        </Button>
        <Button type="submit" color="primary">
          Valider
        </Button>
      </DialogActions>
    </form>
  );

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        {formLabel || "Ajouter"}
      </Button>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          {formLabel || "Ajouter"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            render={renderContent}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
