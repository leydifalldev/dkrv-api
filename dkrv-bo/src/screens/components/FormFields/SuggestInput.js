import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export const SuggestInput = ({
  name,
  onChange,
  label,
  handleValue,
  setFieldValue,
  options,
  ...props
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Autocomplete
        multiple
        options={options}
        autoSelect={true}
        onChange={(e, values) => setFieldValue(name, values.map(handleValue))}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            placeholder={label}
            margin="normal"
            fullWidth
          />
        )}
        {...props}
      />
    </div>
  );
};
