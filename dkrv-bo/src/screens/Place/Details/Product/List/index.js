import React from "react";
import { Grid } from "@material-ui/core";
import { NavBarProductPlace } from "./NavBarProductPlace";
import { ProductCard } from "./ProductCard";
import { EmptyPanel } from "../../../../components";
 
export const ListProducts = ({ products }) => {
  return (
    <div>
      <NavBarProductPlace />
      {products && products.length > 0 ? (
        <Grid container spacing={3}>
          {products.map(product => (
            <ProductCard product={product} />
          ))}
        </Grid>
      ) : (
        <EmptyPanel label={"Veuillez ajouter des produits"} />
      )}
  </div>
  )
};