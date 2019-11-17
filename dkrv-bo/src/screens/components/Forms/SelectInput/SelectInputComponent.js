import React from "react";
import clsx from "clsx";
import {
  InputLabel,
  TextField,
  MenuItem,
  InputAdornment,
  makeStyles,
  withStyles
} from "@material-ui/core";

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
