import React from "react";
import { useHistory } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Search, Add } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  InputBase,
  Typography,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    marginBottom: 20
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 700
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
}));

export const SearchNavBar = () => {
  const classes = useStyles();
  let history = useHistory();

  const goTo = () => {
    history.push(`/place/create`);
  };

  return (
    <div className={classes.grow}>
      <AppBar color="default" position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Place
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={goTo}
              startIcon={<Add />}
            >
              Nouvelle Place
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
