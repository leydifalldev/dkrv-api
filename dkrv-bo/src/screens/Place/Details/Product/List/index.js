import React, { useContext } from "react";
import PlaceContext from "../../Context";
import { useSnackbar } from "notistack";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/react-hooks";
import { RETRIEVE_PRODUCTS_LIST } from "../../../../../network";
import { ProductCard } from "./ProductCard";
import { EmptyPanel, InfoPanel } from "../../../../components";

const useStyles = makeStyles(theme => ({
  root: {
    width: 360
  },
  card: {
    width: 360
  }
}));

export const ListProducts = ({ setTemplate }) => {
  const place = useContext(PlaceContext);
  const { enqueueSnackbar } = useSnackbar();
  const { loading, error, data } = useQuery(RETRIEVE_PRODUCTS_LIST, {
    variables: { id: place.id }
  });

  if (error) {
    if (error.networkError) {
      enqueueSnackbar(String(error.networkError), { variant: "error" });
    }
    if (error.graphQLErrors) {
      error.graphQLErrors.map(error => {
        enqueueSnackbar(error.message, { variant: "error" });
      });
    }
  }
  if (loading) {
    return <InfoPanel label={"Chargement en cours ..."} />;
  } 
  return data && data.getPlace ? 
  <ProductContainer products={data.getPlace} />:<InfoPanel label={"Chargement en cours ..."} />

};

const ProductContainer = ({ products }) => {
  const classes = useStyles();

  if (products && products.length > 0) {
    return (
      <div style={containerStyle}>
        {products.map(product => (
          <ProductCard product={product} classes={classes.card} />
        ))}
      </div>
    );
  } else {
    return <InfoPanel label={"Pas de produits"} />;
  }
};

const containerStyle = {
  display: "flex",
  flexDirection: "row"
};
