import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ButtonGroup,
  Grid,
  Button,
  Typography
} from "@material-ui/core";
import {
  Image,
  Phone,
  AlternateEmailSharp,
  LocationOn,
  Map,
  Pool,
  AvTimer,
  Class,
  Fastfood
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export const ResumePanel = ({ stepperStore }) => {
  const classes = useStyles();
  const history = useHistory();
  console.log("props", stepperStore);
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        {stepperStore.name}
      </Typography>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Class />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={"Categories"}
            secondary={
              stepperStore.catagories ? stepperStore.catagories.join("-") : null
            }
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Fastfood />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={"Gastronomies"}
            secondary={
              stepperStore.gastronomies
                ? stepperStore.gastronomies.join("-")
                : null
            }
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Phone />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Téléphone"} secondary={stepperStore.phone} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AlternateEmailSharp />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Email"} secondary={stepperStore.email} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOn />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Adresse"} secondary={stepperStore.address} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Map />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Zone"} secondary={stepperStore.zone} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Pool />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={"À proximité de l'océan"}
            secondary={stepperStore.oceanear ? "Oui" : "Non"}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AvTimer />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={"Emplacement temporaire"}
            secondary={stepperStore.temporaly ? "Oui" : "Non"}
          />
        </ListItem>
      </List>
      <Grid item>
        <ButtonGroup
          color="primary"
          aria-label="contained primary button group"
        >
          <Button>Modifier</Button>
          <Button
            onClick={() => history.push(`/place/${stepperStore.placeid}`)}
          >
            Terminer
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  );
};
