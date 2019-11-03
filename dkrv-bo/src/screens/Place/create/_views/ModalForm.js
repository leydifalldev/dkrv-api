import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { CREATE_PLACE_DETAIL } from "../../../../network";

export const CreatePlaceModal = () => {
  const [createPlace] = useMutation(CREATE_PLACE_DETAIL);
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = async (values, actions) => {
    console.log(values);
    const { data } = await createPlace({ variables: { placeInput: values } });
    console.log("result log", data);
    history.push(`/place/${data.createPlace}`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderSubmit = props => (
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Annuler
      </Button>
      <Button type="submit" color="primary">
        Creer
      </Button>
    </DialogActions>
  );

  const RenderForm = props => (
    <form onSubmit={props.handleSubmit}>
      <TextField
        type="text"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.name}
        name="name"
        label="Nom"
        helperText={props.errors.name}
        placeholder="Placeholder"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        type="text"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.phone}
        name="phone"
        label="Téléphone"
        placeholder="Placeholder"
        variant="outlined"
        margin="normal"
        helperText={props.errors.phone}
        fullWidth
      />
      <TextField
        type="text"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.email}
        name="email"
        label="Email"
        placeholder="Placeholder"
        variant="outlined"
        margin="normal"
        helperText={props.errors.email}
        fullWidth
      />
      <TextField
        type="text"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.location.address}
        name="location.address"
        label="Adresse"
        placeholder="Placeholder"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        type="text"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.location.zone}
        name="location.zone"
        label="Zone"
        placeholder="Placeholder"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      {props.errors.name && <div id="feedback">{props.errors.name}</div>}
      <FormControlLabel
        control={
          <Switch
            name="oceanNear"
            checked={props.values.oceanNear}
            onChange={props.handleChange}
          />
        }
        label="A proximité de l'océan"
      />
      <FormControlLabel
        control={
          <Switch
            name="temporalyPlace"
            checked={props.values.temporalyPlace}
            onChange={props.handleChange}
          />
        }
        label="Lieu temporaire"
      />
      {renderSubmit()}
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
            initialValues={{
              name: "",
              location: { address: "" },
              oceanNear: false,
              temporalyPlace: false
            }}
            onSubmit={handleSubmit}
            render={RenderForm}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
