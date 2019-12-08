import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Avatar,
  Toolbar,
  AppBar,
  Button,
  ButtonGroup,
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Grid
} from "@material-ui/core";
import { Menu, Image, Work, BeachAccess } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "#FFFFFF",
    boxShadow: "0 0.75rem 1.5rem rgba(18,38,63,.03) !important",
    border: "1px solid #edf2f9"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButton: {
    root: {
      marginRight: theme.spacing(2),
      backgroundColor: "#F76D1E"
    }
  },
  leftItem: {
    display: "flex",
    alignItems: "center"
  },
  categories: {
    marginLeft: 15
  },
  title: {
    marginLeft: 5
  }
}));

export const DetailsBar = ({ data }) => {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#696969">
        <Toolbar className={classes.toolbar}>
          <span className={classes.leftItem}>
            {data.logo ? (
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            ) : null}
            <Typography variant="h3" className={classes.title}>
              {data.name || "Non renseigné"}
            </Typography>
            <Typography className={classes.categories} variant="p">
              {data.categories && data.categories.length > 0
                ? data.categories.join("-")
                : "Non rens."}
            </Typography>
          </span>
          <div>
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
          </div>
        </Toolbar>
        <Divider />
        <Grid container>
          <Grid xs={2}>
            <InfoItem label={"Téléphone"} value={data.phone} />
          </Grid>
          <Grid xs={3}>
            <InfoItem label={"Email"} value={data.email} />
          </Grid>
          <Grid xs={2}>
            <InfoItem label={"Téléphone"} value={data.phone} />
          </Grid>
          <Grid xs={4}>
            <InfoItem label={"Adresse"} value={`${data.address} - ${data.zone}`} />
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

const InfoItem = props => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{props.icon}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.label} secondary={props.value} />
    </ListItem>
  );
};
