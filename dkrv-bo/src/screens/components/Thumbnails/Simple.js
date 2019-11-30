import React from "react";
import {Card, CardHeader, CardMedia, Avatar, CardActions, IconButton, Button, makeStyles} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(theme => ({
  media: {
    height: 190
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

export const Thumbnail = ({ title, subtitle, src, description, goTo, btngroup, style, leftButtonAction }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const leftButtonAction = () => {
    leftButtonAction()
  }

  return (
    <Card style={style} onClick={goTo} className={classes.card}>
      {(title && subtitle) ? <CardHeader
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
        title={title || "NR"}
        subheader={subtitle || "NR"}
      />: null }
      <ThumbnailImage src={src} classes={classes} />
    </Card>
  );
};

const ThumbnailImage = ({src, height, classes}) =>
  src ? (
    <CardMedia
      className={classes.media}
      image={src}
      title="Paella dish"
    />
  ) : (
    <Skeleton variant="rect" className={classes.media} height={height || 180} />
  );
