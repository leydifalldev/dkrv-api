import React, { Fragment, useContext } from "react";
import PlaceContext from "../store/place.store";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ModalFormComponent } from "../../components/Forms/PopupForm";
import { TextInput } from "../../components/Forms/TextInput";
import { SelectInput } from "../../components/Forms/SelectInput";
import { ChipsInput } from "../../components/Forms/ChipsInput";

const types = [
  {
    value: "food",
    label: "Repas"
  },
  {
    value: "smoke",
    label: "Fumette"
  }
];

const collections = [
  {
    value: "crepes",
    label: "Crêpes"
  },
  {
    value: "pizzas",
    label: "Pizzas"
  }
];

const sizes = [
  {
    value: "small",
    label: "Petite"
  },
  {
    value: "medium",
    label: "Moyenne"
  },
  {
    value: "big",
    label: "Grande"
  }
];

const quantities = [
  {
    value: "1",
    label: "1"
  },
  {
    value: "2",
    label: "2"
  },
  {
    value: "3",
    label: "3"
  }
];

const spicyLevel = [
  {
    value: "0",
    label: "Non épicé"
  },
  {
    value: "1",
    label: "Légèrement épicé"
  },
  {
    value: "2",
    label: "Épicé"
  },
  {
    value: "3",
    label: "Très épicé"
  }
];

const handleSubmit = async (values, actions) => {
  console.log(values);
};

const ProductForm = props => (
  <Fragment>
    <TextInput
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.name}
      name="name"
      label="Nom"
      error={props.errors.name}
      placeholder="Placeholder"
      variant="outlined"
      margin="normal"
      fullWidth
    />
    <TextInput
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.price}
      name="price"
      label="Prix"
      error={props.errors.name}
      placeholder="Prix: 10000 FCFA"
      variant="outlined"
      margin="normal"
      fullWidth
      InputProps={{
        endAdornment: <InputAdornment position="start">FCFA</InputAdornment>
      }}
    />
    <TextInput
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.discount}
      name="discount"
      label="Discount"
      error={props.errors.name}
      placeholder="Discount: 10%"
      variant="outlined"
      margin="normal"
      fullWidth
      InputProps={{
        startAdornment: <InputAdornment position="start">%</InputAdornment>
      }}
    />
    <ChipsInput
      name="recipes"
      label="Recette"
      handleChange={props.handleChange}
      value={props.values.recipes}
    />
    <TextInput
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.description}
      name="description"
      label="Description"
      error={props.errors.name}
      placeholder="Description"
      variant="outlined"
      margin="normal"
      multiline
      rows="4"
      fullWidth
    />
    <SelectInput
      fullWidth
      name="type"
      label={"Type de product"}
      onChange={props.handleChange}
      value={props.values.type}
      margin="normal"
      options={types}
    />
    <SelectInput
      fullWidth
      name="collection"
      label={"Collection"}
      onChange={props.handleChange}
      value={props.values.collection}
      margin="normal"
      options={collections}
    />
    <SelectInput
      fullWidth
      name="size"
      label={"Taille"}
      onChange={props.handleChange}
      value={props.values.size}
      margin="normal"
      options={sizes}
    />
    <SelectInput
      fullWidth
      name="quantity"
      label={"Quantité"}
      onChange={props.handleChange}
      value={props.values.quantity}
      margin="normal"
      options={quantities}
    />
    <SelectInput
      fullWidth
      name="spicy"
      label={"Épices"}
      onChange={props.handleChange}
      value={props.values.spicy}
      margin="normal"
      options={spicyLevel}
    />
    {props.errors.name && <div id="feedback">{props.errors.name}</div>}
  </Fragment>
);

export const CreateProductModal = () => {
  const place = useContext(PlaceContext);
  console.log("place context", place);
  const initialValues = {
    name: "",
    discount: 0,
    description: "",
    temporalyPlace: false,
    placeid: place.id,
    placename: place.name,
    placezone: place.location.zone,
    location:
      place.location && place.location.coordinate
        ? place.location.coordinate
        : null
  };
  return (
    <ModalFormComponent
      formLabel="Ajouter product"
      initialValues={initialValues}
      formComponent={<ProductForm />}
      handleSubmit={handleSubmit}
    />
  );
};
