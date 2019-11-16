import React, { useContext } from "react";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PlaceContext from "../../store/place.store";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TextInput } from "../../../components/Forms/TextInput";
import { SelectInput } from "../../../components/Forms/SelectInput";
import { Grid } from "@material-ui/core";
import { SuggestInput } from "../../../components/FormFields";

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

const suggession = [
  { title: 'Tomates', year: 1994 },
  { title: 'Viandes', year: 1972 },
];

const handleSubmit = values => {
  console.log(values);
};

const ProductForm = props => {
  return (
    <form autoComplete="no-completion" onSubmit={props.handleSubmit}>
      <Grid style={styleGrid}>
        <Grid style={styleGridItem} sm={4}>
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
              endAdornment: (
                <InputAdornment position="start">FCFA</InputAdornment>
              )
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
              startAdornment: (
                <InputAdornment position="start">%</InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item sm={4} style={styleGridItem}>
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
        </Grid>
        <Grid item sm={4} style={styleGridItem}>
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
        </Grid>
      </Grid>
      <Grid item xs={12}>
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
          rows="4"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <SuggestInput
          onChange={props.handleChange}
          setFieldValue={props.setFieldValue}
          value={props.values.recipes}
          options={suggession}
          filterSelectedOptions
          getOptionLabel={option => option.title}
          name="recipes"
          id="recipes"
          label="Recipes"
          error={props.errors.recipes}
          onBlur={props.handleBlur}
        />
      </Grid>
      <div>
        <Button disabled={props.activeStep === 0} onClick={props.handleBack}>
          Retour
        </Button>
        <Button type="submit" color="primary">
          Creer
        </Button>
      </div>
    </form>
  );
};

export const AddProductToPlace = () => {
  const place = useContext(PlaceContext);
  console.log("place context", place);
  const initialValues = {
    name: "",
    discount: 0,
    description: "",
    temporalyPlace: false,
    placeid: place.id,
    placename: place.name,
    placezone: place.zone,
    location: place.location
  };

  return (
    <Formik
      initialValues={initialValues}
      render={ProductForm}
      onSubmit={handleSubmit}
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
