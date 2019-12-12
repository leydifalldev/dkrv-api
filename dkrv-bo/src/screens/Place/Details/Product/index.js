import React, { useState, useContext } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import { red } from "@material-ui/core/colors";
import { useQuery } from "@apollo/react-hooks";
import PlaceContext from "../Context";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import CreateProductStepper from "./Add/CreateProductStepper";
import { NavBarProductPlace } from "./_views/NavBarProductPlace";
import { RETRIEVE_PRODUCTS_LIST } from "../../../../network";
import { ProductCard } from "./List/ProductCard";
import { InfoPanel } from "../../../components";

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

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
};

export const ProductTab = () => {
  const [template, setTemplate] = useState(0);
  const place = useContext(PlaceContext);
  const { enqueueSnackbar } = useSnackbar();

  const { loading, error, data, refetch } = useQuery(RETRIEVE_PRODUCTS_LIST, {
    variables: { id: place.id }
  });

  console.log("RETRIEVE_PRODUCTS_LIST", data);

  const _getListTpl = async () => {
    await refetch();
    setTemplate(0);
  };

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

  const _renderTemplate = tpl => {
    switch (tpl) {
      case 0:
        return (
          <ProductListPanel
            products={data && data.getPlace ? data.getPlace.products : []}
            setTemplate={setTemplate}
          />
        );
      case 1:
        return (
          <CreateProductStepper refresh={refetch} setTemplate={_getListTpl} />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <NavBarProductPlace setTemplate={setTemplate} />
      {_renderTemplate(template)}
    </div>
  );
};

const ProductListPanel = ({ products }) => {
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
