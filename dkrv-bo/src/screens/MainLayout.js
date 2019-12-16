import React from "react";
import clsx from "clsx";
import { SnackbarProvider } from "notistack";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Drawer,
  Toolbar,
  MenuList,
  MenuItem,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItemIcon
} from "@material-ui/core";
import { PriorityHigh, Send } from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PlaceScreen } from "./Place/PlaceScreen";
import { Menu } from "./Menu";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    height: 50,
    borderBottom: "1px solid #edf2f9",
    background: "#FFF",

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: "#4A148C",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#4A148C",
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    paddingTop: 65,
    paddingLeft: 20,
    paddingRight: 20
  }
}));

export const MainLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <TopNavBar
          handleDrawerOpen={handleDrawerOpen}
          classes={classes}
          isOpen={open}
        />
        <MainDrawer
          classes={classes}
          isOpen={open}
          handleDrawerClose={handleDrawerClose}
          theme={theme}
        />
        <LayoutContent classes={classes} />
      </div>
    </Router>
  );
};

const MainDrawer = ({ classes, isOpen, handleDrawerClose, theme }) => (
  <Drawer
    variant="permanent"
    className={clsx(classes.drawer, {
      [classes.drawerOpen]: isOpen,
      [classes.drawerClose]: !isOpen
    })}
    classes={{
      paper: clsx({
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen
      })
    }}
    open={isOpen}
  >
    <div className={classes.toolbar}>
      <img
        height="50"
        width="50"
        src="/assets/img/dkrv-logo-3.png"
        alt="dkrv-logo-3"
      />
    </div>
    <Menu />
  </Drawer>
);

const LayoutContent = ({ classes }) => (
  <main className={classes.content}>
    <SnackbarProvider>
      <Switch>
        <Route path="/place">
          <PlaceScreen />
        </Route>
      </Switch>
    </SnackbarProvider>
  </main>
);

const TopNavBar = ({ classes, isOpen, handleDrawerOpen }) => (
  <AppBar
    position="fixed"
    color="default"
    className={clsx(classes.appBar, {
      [classes.appBarShift]: isOpen
    })}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: isOpen
        })}
      ></IconButton>
    </Toolbar>
  </AppBar>
);
