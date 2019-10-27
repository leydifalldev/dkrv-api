import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

export const ChipsInput = props => {
  const classes = useStyles();
  let items = [];
  let tmp = "";
  const [data, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" }
  ]);

  const addChip = () => {
    items = [...items, tmp];
    setChipData(items);
    console.log(items);
    console.log(data);
  };

  const handleChange = e => {
    const target = e.target;
    tmp = target.value;
    console.log("handleChange", tmp);
  };

  const handleDelete = chipToDelete => () => {
    if (chipToDelete.label === "React") {
      alert("Why would you want to delete React?! :)");
      return;
    }

    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  return (
    <div>
      <TextField
        id="outlined-adornment-password"
        variant="outlined"
        type="text"
        label="Recette"
        fullWidth
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Fab
                onClick={addChip}
                edge="end"
                color="secondary"
                variant="extended"
                size="small"
              >
                <AddIcon />
                Ajouter
              </Fab>
            </InputAdornment>
          )
        }}
      />
      <Paper className={classes.root}>
        {items.map(data => {
          return (
            <Chip
              key={data.key}
              label={data.label}
              onDelete={handleDelete(data)}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    </div>
  );
};
