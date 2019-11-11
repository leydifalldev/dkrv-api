import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { TextInput } from "../../../components/Forms/TextInput";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import { Grid } from "@material-ui/core";
import * as Yup from "yup";
import { CREATE_PLACE_DETAIL } from "../../../../network";

export const CreatePlaceModal = () => {
  const [createPlace, error, loading] = useMutation(CREATE_PLACE_DETAIL);
  const handleSubmit = async (values, actions) => {
    console.log(values);
    try {
      await createPlace({
        variables: { placeInput: values }
      });
    } catch (e) {
      console.log("result error log", e.graphQLErrors);
      const errorsMessage = e.graphQLErrors.map(error => error.message);
      console.log(errorsMessage);
    }
  };

  const renderSubmit = props => (
    <div>
      <Button color="primary">Annuler</Button>
      <Button type="submit" color="primary">
        Creer
      </Button>
    </div>
  );

  const RenderForm = props => (
    <form onSubmit={props.handleSubmit}>
      <Grid style={styleGrid}>
        <Grid style={styleGridItem} sm={4}>
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
        </Grid>
        <Grid item sm={4} style={styleGridItem}>
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
        </Grid>
        <Grid item sm={4} style={styleGridItem}>
          <TextInput
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.description}
            name="description"
            label="Description"
            error={props.errors.description}
            placeholder="Description"
            variant="outlined"
            margin="normal"
            multiline
            rows="10"
            fullWidth
          />
        </Grid>
      </Grid>
      {renderSubmit()}
    </form>
  );

  return (
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
  );
};

const styleGrid = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between"
};

const styleGridItem = {
  paddingRight: 5,
  paddingLeft: 5
};
