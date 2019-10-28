import React, { Fragment, useRef } from "react";
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

const chips = [
  {
    priority: 0,
    name: "Repas"
  },
  {
    priority: 1,
    name: "Tomates"
  }
];

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
  const inputEl = useRef(null);
  let items = [];
  let tmp = "";
  const [chips, setChip] = React.useState([]);
  const [inputVal, setInputValue] = React.useState("");

  const addChip = () => {
    console.log("handleChange", inputVal);
    const chip = {
      priority: chips.length,
      name: inputVal
    };
    setChip([...chips, chip]);
    setInputValue("");
    console.log(chips);
    props.handleChange(chips);
    //console.log(items);
    //console.log(data);
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleDelete = chipToDelete => () => {
    setChip(chips =>
      chips.filter(chip => chip.priority !== chipToDelete.priority)
    );
  };

  return (
    <div>
      <TextField
        id="outlined-adornment-password"
        variant="outlined"
        type="text"
        label="Recette"
        ref={inputEl}
        value={inputVal}
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
        {chips.map(chip => {
          return (
            <Chip
              key={chip.priority}
              label={chip.name}
              onDelete={handleDelete(chip)}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    </div>
  );
};

export const Chips = arrayHelpers => {
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
      <Paper>
        {chips.map(chip => {
          return <Chip key={chip.priority} label={chip.name} />;
        })}
      </Paper>
    </div>
  );
};
