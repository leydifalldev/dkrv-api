import React from "react";
import { Grid } from "@material-ui/core";
import { PlaceSchedule } from "./Schedule";
import { DetailsThumbnail } from "./DetailsThumbnail";
import { GastronomyPanel } from "./GastronomyPanel";

export const FichePlace = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <DetailsThumbnail />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12}>
          <GastronomyPanel />
        </Grid>
        <Grid item xs={12}>
          <PlaceSchedule />
        </Grid>
      </Grid>
    </div>
  );
};
