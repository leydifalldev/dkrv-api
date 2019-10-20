import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import MapIcon from "@material-ui/icons/Map";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export const AddressPanel = ({ location }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationOnIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Adresse exacte"
          secondary={location.address || "Non Rens."}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationSearchingIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Adresse CPC" secondary={location.email} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MapIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Zone" secondary={location.zone} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GpsFixedIcon />
          </Avatar>
        </ListItemAvatar>
        {location.coordinate ? (
          <ListItemText
            primary="Coordonnées"
            secondary={`Lon: ${location.coordinate.lon ||
              "NR"} - Lat: ${location.coordinate.lat || "NR"}`}
          />
        ) : (
          <span>Coordonnées non renseignées</span>
        )}
      </ListItem>
    </List>
  );
};
