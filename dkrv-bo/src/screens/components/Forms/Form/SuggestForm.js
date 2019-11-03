/* eslint-disable no-use-before-define */
import React from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export const SuggestForm = props => {
  const handleChange = (e, value) => {
    console.log(value);
    props.onChange("recipes");
  };

  return (
    <div style={{ width: "100%" }}>
      <Autocomplete
        multiple
        options={top100Films}
        getOptionLabel={option => option.title}
        defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="filterSelectedOptions"
            placeholder="Favorites"
            margin="normal"
            onChange={props.onChange}
            fullWidth
          />
        )}
        value={props.value}
      />
    </div>
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 }
];
