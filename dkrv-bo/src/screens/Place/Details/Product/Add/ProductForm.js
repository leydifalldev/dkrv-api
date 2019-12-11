import React, { useContext } from "react";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import { useSnackbar } from "notistack";
import PlaceContext from "../../Context";
import InputAdornment from "@material-ui/core/InputAdornment";
//import { TextInput } from "../../../../components/Forms/TextInput";
import { Grid, TextField, Switch } from "@material-ui/core";
import { useMutation } from "@apollo/react-hooks";
import { ADD_PRODUCT } from "../../../../../network";
import { SelectInput } from "../../../../components/Forms/SelectInput";
import { SuggestInput } from "../../../../components/FormFields";

const categories = [
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
    value: "SMALL",
    label: "Petite"
  },
  {
    value: "MEDIUM",
    label: "Moyenne"
  },
  {
    value: "BIG",
    label: "Grande"
  }
];

const quantities = [
  {
    value: 1,
    label: "1"
  },
  {
    value: 2,
    label: "2"
  },
  {
    value: 3,
    label: "3"
  }
];

const spicyLevel = [
  {
    value: 0,
    label: "Non épicé"
  },
  {
    value: 1,
    label: "Légèrement épicé"
  },
  {
    value: 2,
    label: "Épicé"
  },
  {
    value: 3,
    label: "Très épicé"
  }
];

const recipes = [
  {
    value: "tomate",
    label: "Tomate"
  },
  {
    value: "viande",
    label: "Viande"
  },
  {
    value: "poulet",
    label: "Poulet"
  },
  {
    value: "salade",
    label: "Salade"
  }
];

const ProductForm = props => {
  return (
    <form autoComplete="no-completion" onSubmit={props.handleSubmit}>
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
            type="number"
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
          <TextField
            type="number"
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
            type="number"
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
        <TextField
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
          options={recipes}
          filterSelectedOptions
          handleValue={value => value.value}
          getOptionLabel={option => option.label}
          name="recipes"
          id="recipes"
          label="Recipes"
          error={props.errors.recipes}
          onBlur={props.handleBlur}
        />
      </Grid>
      <Grid item xs={12}>
        <SuggestInput
          onChange={props.handleChange}
          setFieldValue={props.setFieldValue}
          value={props.values.categories}
          options={categories}
          filterSelectedOptions
          handleValue={value => value.value}
          getOptionLabel={option => option.label}
          name="categories"
          id="categories"
          label="Categories"
          error={props.errors.categories}
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

export const AddProductToPlace = ({ handleNext }) => {
  const [createProduct, error, loading] = useMutation(ADD_PRODUCT);
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values, actions) => {
    console.log(values);
    try {
      const result = await createProduct({
        variables: { productInput: values }
      });
      console.log("result product log", result);
      handleNext();
    } catch (e) {
      if (e.networkError) {
        enqueueSnackbar(String(e.networkError), { variant: "error" });
      }
      if (e.graphQLErrors) {
        e.graphQLErrors.map(error => {
          enqueueSnackbar(error.message, { variant: "error" });
        });
      }
      //console.log(errorsMessage);
    }
  };
  const place = useContext(PlaceContext);
  console.log("place context", place);
  const initialValues = {
    name: "",
    discount: 0,
    description: "",
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

export default AddProductToPlace;
