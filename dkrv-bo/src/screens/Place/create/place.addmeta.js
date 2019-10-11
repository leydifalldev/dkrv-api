import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextInput, TextArea } from "../../..";

const Form = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  return (
    <form className="row" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <TextInput
          label={"Nom Restaurant"}
          name={"name"}
          error={errors.name}
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.name}
          touched={touched.name}
        />
        <TextInput
          label={"Téléphone"}
          name={"phone"}
          error={errors.phone}
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.phone}
          touched={touched.phone}
        />
        <TextInput
          label={"Email"}
          name={"email"}
          error={errors.email}
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.email}
          touched={touched.email}
        />
        <TextArea
          label={"Adresse"}
          name={"address"}
          error={errors.address}
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.address}
          touched={touched.address}
        />
      </div>
      <div className="col-md-6">
        <TextInput
          label={"Nom gérant"}
          name={"manager"}
          error={errors.manager}
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.manager}
          touched={touched.manager}
        />
      </div>
      <ButtonNext submitting={isSubmitting} />
    </form>
  );
};

export const ButtonNext = ({ submitting }) => (
  <div className="w-100 mr-3">
    <button
      type="submit"
      className="btn btn-primary float-right"
      disabled={submitting}
    >
      {" "}
      {submitting ? "...En cours" : "SUIVANT"}
    </button>
  </div>
);

// // Custom sync validation
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Veuillez renseigner le nom"),
  phone: Yup.string()
    .length(9, "Numéro de téléphone invalide")
    .required("Veuillez saisir un numéro de téléphone"),
  email: Yup.string()
    .email("L'email est invalide")
    .required("Veuillez renseigner l'email"),
  manager: Yup.string().required("Veuillez renseigner le nom du gérant")
});

class StepOne extends React.Component {
  render() {
    const { initialValues, onSubmit, prev } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        render={Form}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
    );
  }
}

export default StepOne;
