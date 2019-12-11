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
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export const MainLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
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
    <div className={classes.toolbar}></div>
    <Divider />
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <Send fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit">Nouvelle place</Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <PriorityHigh fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit">List Place</Typography>
      </MenuItem>
    </MenuList>
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
/*
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
      >
        <img
          height="50"
          width="50"
          src="/assets/img/dkrv-logo-3.svg"
          alt="dkrv-logo-3"
        />
      </IconButton>
    </Toolbar>
  </AppBar>
);*/
