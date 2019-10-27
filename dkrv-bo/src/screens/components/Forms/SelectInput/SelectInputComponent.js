import React from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {}
}));

export const SelectInput = props => {
  const classes = useStyles();
  return props.options ? (
    <TextField
      select
      variant="outlined"
      label="With Select"
      InputProps={
        props.adornment
          ? {
              startAdornment: (
                <InputAdornment position="start">
                  {props.adornment}
                </InputAdornment>
              )
            }
          : null
      }
      {...props}
    >
      {props.options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  ) : null;
};
