import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import CreatePlaceForm from "./Form";
import { Formik } from "formik";

export const CreatePlaceModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (values, actions) => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Nouvelle Place
      </Button>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nouvelle Place</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <Formik
            initialValues={{ name: "jared" }}
            onSubmit={handleSubmit}
            render={RenderForm}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleClose} color="primary">
            Creer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const RenderForm = props => (
  <form onSubmit={props.handleSubmit}>
    <TextField
      type="text"
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.name}
      name="name"
    />
    {props.errors.name && <div id="feedback">{props.errors.name}</div>}
    <Button type="submit">Submit</Button>
  </form>
);
