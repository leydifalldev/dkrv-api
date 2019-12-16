import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  Typography,
  ListSubheader,
  ListItemIcon
} from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import PlaceContext from "../../Context";
import { RETRIEVE_PRODUCTS_GROUPED_INFO } from "../../../../../network";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #edf2f9"
  },
  btnCreate: {
    marginTop: 20,
    marginBottom: 10
  },
  menuBloc: {
    //borderTop: "1px solid #edf2f9"
    marginTop: 10
  },
  menuBlocTitle: {
    marginLeft: 10
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export const ProductMenu = ({ setTemplate }) => {
  const classes = useStyles();
  const { id } = useContext(PlaceContext);
  const { loading, error, data } = useQuery(RETRIEVE_PRODUCTS_GROUPED_INFO, {
    variables: { id }
  });
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  console.log("Category log", data);

  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        color="secondary"
        className={classes.btnCreate}
        onClick={() => setTemplate(1)}
      >
        Ajouter produit
      </Button>
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Total" />
          <Badge label={232} />
        </ListItem>
      </List>
      <Divider />
      {data && data.getPlace ? (
        <MenuBloc
          handleListItemClick={handleListItemClick}
          selectedIndex={selectedIndex}
          classes={classes}
          items={data.getPlace.products_grouped}
        />
      ) : (
        <span>Vide</span>
      )}
    </div>
  );
};

const MenuBloc = ({ items, classes }) => {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
        ></ListSubheader>
      }
      className={classes.root}
    >
      {items
        ? items.map((item, index) => (
            <MenuItem key={index} item={item} classes={classes} />
          ))
        : null}
    </List>
  );
};

const MenuItem = ({ item, classes }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={item.name} />
        <ListItemIcon>
          <Badge label={item.count} />
        </ListItemIcon>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {item.children ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children
              ? item.children.map(child => (
                  <ListItem button className={classes.nested}>
                    <ListItemText primary={child.name} />
                    <ListItemIcon>
                      <Badge label={child.count} />
                    </ListItemIcon>
                  </ListItem>
                ))
              : null}
          </List>
        </Collapse>
      ) : null}
    </Fragment>
  );
};

const Badge = ({ label }) => (
  <div style={badgeStyle}>
    <span style={wrapperStyle}>{label}</span>
  </div>
);

const badgeStyle = {
  paddingLeft: 5,
  paddingRight: 5,
  display: "inline-block",
  borderRadius: 25,
  backgroundColor: "#F87E3F",
  minWidth: 25,
  textAlign: "center",
  color: "#FFF"
};

const wrapperStyle = {
  fontSize: 12,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
