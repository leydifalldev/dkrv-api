import React from "react";
import MaterialTable from "material-table";
import List from "@material-ui/core/List";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@material-ui/core";

export const InfoPanel = () => {
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" }
    ],
    data: [
      { name: "Mehmet", surname: "Baran" },
      {
        name: "Zerya Betül",
        surname: "Baran"
      }
    ]
  });

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
  );
};
