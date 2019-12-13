import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  IconButton,
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { MoreVert } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  card: {
    width: 270,
    marginTop: 4,
    marginLeft: 2,
    marginRight: 2
  },
  cardHeader:{
    root: {
      padding: 4
    }
  },
  cardInfoLine: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  media: {
    height: 220,
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

export const ProductCard = ({ product }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={classes.cardHeader}
        title={product.name}
        subheader={product.collection}
      />
      {product && product.picture ? (
        <CardMedia
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
          classes={classes.media}
        />
      ) : (
        <Skeleton variant="rect" classes={classes.media} height={180} width="100%" />
      )}
      <CardContent>
        <div className={classes.cardInfoLine}>
          <Typography variant="p">Prix</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product && product.price
              ? `${product.price} FCFA`
              : "Non renseignés"}
          </Typography>
        </div>
        <div className={classes.cardInfoLine}>
          <Typography variant="p">Ingrediens</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product && product.recipes
              ? product.recipes.join("-")
              : "Non renseignés"}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
