import React from "react";
import TextField from "@material-ui/core/TextField";

export const TextInput = props => (
  <TextField
    id={props.name}
    type="text"
    name={props.name}
    onChange={props.handleChange}
    onBlur={props.handleBlur}
    helperText={props.error}
    {...props}
  />
);
