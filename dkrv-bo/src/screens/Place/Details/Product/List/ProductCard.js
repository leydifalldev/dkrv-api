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
    width: 345
  },
  cardInfoLine: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
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

export const ProductCard = ({ product }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={product.name}
        subheader={product.collection}
      />
      {product && product.picture ? (
        <CardMedia
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
      ) : (
        <Skeleton variant="rect" height={250} width="100%" />
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
