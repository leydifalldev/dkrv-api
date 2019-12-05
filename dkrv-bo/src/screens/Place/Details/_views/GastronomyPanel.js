import React from "react";
import { Paper, Typography, Divider } from "@material-ui/core";

export const GastronomyPanel = ({ gastronomies }) => (
  <Paper>
    <Typography variant="h6" align="left">
      Gastronomies
    </Typography>
    <Divider />
  </Paper>
);
