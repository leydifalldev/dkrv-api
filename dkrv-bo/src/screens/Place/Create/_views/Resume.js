import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ButtonGroup, Grid, Button} from '@material-ui/core';
import { Image, Work, BeachAccess } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export const ResumePanel = ({stepperStore}) => {
  const classes = useStyles();
  console.log("props", stepperStore);
  return (
    <div>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Nom restaurant"} secondary={stepperStore.name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Téléphone"} secondary={stepperStore.phone} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Email"} secondary={stepperStore.email} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Email"} secondary={stepperStore.email} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Email"} secondary={stepperStore.email} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Adresse"} secondary={stepperStore.address} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Zone"} secondary={stepperStore.zone} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"À proximité de l'océan"} secondary={stepperStore.oceanear ? "Oui": "Non"} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Emplacement temporaire"} secondary={stepperStore.temporaly ? "Oui": "Non"} />
        </ListItem>
      </List>
      <Grid item>
      <ButtonGroup color="primary" aria-label="contained primary button group">
        <Button>Modifier</Button>
        <Button>Terminer</Button>
      </ButtonGroup>
    </Grid>
  </div>
  );
}