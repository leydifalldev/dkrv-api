import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import ListIcon from "@material-ui/icons/List";
import BusinessIcon from "@material-ui/icons/Business";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2)
  },
  link: {
    display: "flex"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  }
}));

export const DKRVBreadcrumbs = props => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/place/list" className={classes.link}>
          <ListIcon className={classes.icon} />
          List
        </Link>
        <Link
          color="inherit"
          to={{ pathname: "/place/" + props.currentPlaceId }}
          className={classes.link}
        >
          <BusinessIcon className={classes.icon} />
          {props.currentPlaceName}
        </Link>
      </Breadcrumbs>
    </Paper>
  );
};
