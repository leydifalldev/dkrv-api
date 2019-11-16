import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useQuery } from "@apollo/react-hooks";
import { PlaceThumbnail } from "./_views/PlaceThumbnail";
import { RETRIEVE_PLACE_LIST } from "../../../network";
import { useHistory } from "react-router-dom";
import { SearchNavBar } from "../_views/SearchNavBar";

export const PlaceListLayout = () => (
  <Fragment>
    <SearchNavBar />
    <PlaceList />
  </Fragment>
);
export const PlaceList = () => {
  const { data } = useQuery(RETRIEVE_PLACE_LIST);
  let history = useHistory();

  const goTo = id => {
    history.push(`/place/${id}`);
  };
  console.log(data);
  return data && data.places && data.places.length ? (
    <Grid
      style={placeContainerStyle}
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={1}
    >
      {data.places.map(place => (
        <Grid item xs={12} sm={3}>
          <PlaceThumbnail place={place}/>
        </Grid>
      ))}
    </Grid>
  ) : (
    <ErrorPanel />
  );
};

const ErrorPanel = () => (
  <div class="card-panel teal">
    <span class="white-text">La liste est vide</span>
  </div>
);

const placeContainerStyle = {
  backgroundColor: "#f8f9fa !important"
};
