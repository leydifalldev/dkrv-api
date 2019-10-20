import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 200
  }
}));

export const TextInput = ({
  label,
  name,
  error,
  placeholder,
  touched,
  endornment,
  handleChange,
  handleBlur,
  value
}) => {
  const classes = useStyles();
  return (
    <TextField
      id={name}
      className={clsx(classes.margin, classes.textField)}
      variant="outlined"
      label={label}
      value={value}
      onChange={handleChange}
      helperText={name}
      InputProps={{
        endAdornment: endornment ? (
          <InputAdornment position="end">{endornment}</InputAdornment>
        ) : null
      }}
    />
  );
};
export default TextInput;
