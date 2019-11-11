import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#FFFFFF"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#FFFFFF"
  }
}));

export const useColorlibStepIconStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: theme.shadows[3]
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
  }
}));
