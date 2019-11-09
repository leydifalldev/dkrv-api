import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export const SuggestForm = ({name, onChange, setFieldValue, options, ...props}) => {
  return (
    <div style={{ width: "100%" }}>
      <Autocomplete
        multiple
        options={options}
        autoSelect={true}
        onChange={(e, value) => setFieldValue(name, value)}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label=""
            placeholder="Ingrdients"
            margin="normal"
            fullWidth
          />
        )}
        {...props}
      />
      </div>)
      }