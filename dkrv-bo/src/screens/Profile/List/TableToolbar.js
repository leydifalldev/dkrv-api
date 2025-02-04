import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Search, Add } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export const TableToolbar = props => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Rechercher"
        inputProps={{ "aria-label": "rechercher" }}
        variant="outlined"
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        color="secondary"
      >
        <Search />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        variant=""
        className={classes.iconButton}
        aria-label="directions"
      >
        <Add />
      </IconButton>
    </Paper>
  );
};
