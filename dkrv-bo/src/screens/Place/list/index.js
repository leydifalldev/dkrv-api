import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useQuery } from "@apollo/react-hooks";
import { PlaceThumbnail } from "./_views/PlaceThumbnail";
import { RETRIEVE_PLACE_LIST } from "../../../network";
import { useHistory } from "react-router-dom";
import { SearchNavBar } from "./_views/SearchNavBar";

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
    <div style={placeContainerStyle}>
      {data.places.map(place => (
        <PlaceThumbnail place={place} />
      ))}
    </div>
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
  backgroundColor: "#f8f9fa !important",
  display: "flex",
  flexWrap: "wrap"
};
