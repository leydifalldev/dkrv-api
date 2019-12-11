import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: "#f5f5f5"
  }
}));

export const InfoPanel = ({ label }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h6">{label}</Typography>
      </Paper>
    </div>
  );
};
