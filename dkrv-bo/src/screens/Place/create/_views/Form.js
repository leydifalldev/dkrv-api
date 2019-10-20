import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextInput, TextArea } from "../../../components/FormFields";
import TextField from "@material-ui/core/TextField";

// // Custom sync validation
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Veuillez renseigner le nom"),
  phone: Yup.string()
    .length(9, "Numéro de téléphone invalide")
    .required("Veuillez saisir un numéro de téléphone"),
  email: Yup.string()
    .email("L'email est invalide")
    .required("Veuillez renseigner l'email")
});

const CreatePlaceForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "jared" }}
      onSubmit={handleSubmit}
      render={RenderForm}
    />
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
    <button type="submit">Submit</button>
  </form>
);

export default CreatePlaceForm;
