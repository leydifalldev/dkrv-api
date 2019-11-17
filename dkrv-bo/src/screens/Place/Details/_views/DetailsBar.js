import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { DKRVBreadcrumbs } from "./Breadcrumb";
import { useHistory } from "react-router-dom";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "#FFFFFF",
    boxShadow: "0 0.75rem 1.5rem rgba(18,38,63,.03) !important",
    border: "1px solid #edf2f9"
  },
  menuButton: {
    root: {
      marginRight: theme.spacing(2),
      backgroundColor: "#F76D1E"
    }
  },
  title: {
    flexGrow: 1
  }
}));

export const DetailsBar = props => {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#696969">
        <Toolbar>
          <DKRVBreadcrumbs
            currentPlaceId={props.id}
            currentPlaceName={props.name}
          />
          <Typography variant="h6" className={classes.title}></Typography>
          <ButtonGroup
            color="primary"
            size="small"
            aria-label="outlined primary button group"
          >
            <Button
              classes={classes.menuButton}
              color="secondary"
              onClick={() => history.goBack()}
            >
              retour
            </Button>
            <Button>Modifier</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
};
