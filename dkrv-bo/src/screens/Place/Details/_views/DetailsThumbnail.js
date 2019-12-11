import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import Skeleton from "@material-ui/lab/Skeleton";

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

export const DetailsThumbnail = ({ picture, title, description, ...props }) => {
  const classes = useStyles();
  return (
    <Card classes={classes.root}>
      {picture ? (
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
      ) : (
        <Skeleton variant="rect" height={250} width="100%" />
      )}
    </Card>
  );
};
