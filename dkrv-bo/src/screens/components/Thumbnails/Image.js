import React from "react";
import { CardMedia, Skeleton } from "@material-ui/core";

export const ThumbnailImage = ({src, height, classes}) =>
  src ? (
    <CardMedia
      className={classes.media}
      image={src}
      title="Paella dish"
    />
  ) : (
    <Skeleton variant="rect" className={classes.media} height={height || 180} />
  );