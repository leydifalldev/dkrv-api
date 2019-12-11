import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { CardHeader, Divider } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import { EmptyPanel } from "../../../../components";
import { NavBarProductPlace } from "../List/NavBarProductPlace";
import CreateProductStepper from "../Add/CreateProductStepper";

const useStyles = makeStyles(theme => ({
  root: {
    width: 360
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export const ListProducts = ({ products }) => {
  return (
    <div>
   {products && products.length > 0 ? (
    <Grid container spacing={3}>
      {products.map(product => (
        <RenderProduct product={product} />
      ))}
    </Grid>
  ) : (
    <EmptyPanel label={"Veuillez ajouter des produits"} />
  )}
  </div>
  )
};

export const ListProductsPanel = () => {
  const [template, setTemplate] = useState(0);
  const products = [];

  const _renderTemplate = (tpl) => {
    switch(tpl) {
      case 0:
        return <ListProducts products={products}/>
      case 1:
        return <CreateProductStepper/>
      default:
        return null;
    }
  }

  return (
    <div>
      {_renderTemplate(template)}
    </div>
  );
};

const RenderProduct = ({ product }) => (
  <Grid item xs={12} sm={3}>
    <ProductThumbnail product={product} />
  </Grid>
);

export const ProductThumbnail = ({ product }) => {
  const classes = useStyles();
  console.log(classes);

  return (
    <Card classes={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.name}
        subheader="September 14, 2016"
      />
      {product.Avatarpicture ? (
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
      ) : (
        <Skeleton variant="rect" height={250} width="100%" />
      )}
      <CardContent></CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
