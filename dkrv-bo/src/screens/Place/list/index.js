import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useQuery } from "@apollo/react-hooks";
import { Thumbnail } from "../../components/Thumbnails";
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
  console.log(data);
  return data && data.places.length ? (
    <ListCard style={placeContainerStyle} items={data.places} />
  ) : (
    <ErrorPanel />
  );
};

const ErrorPanel = () => (
  <div class="card-panel teal">
    <span class="white-text">La liste est vide</span>
  </div>
);

const ListCard = ({ items }) => {
  let history = useHistory();

  const goTo = id => {
    history.push(`/place/${id}`);
  };

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={1}
    >
      {items.map(item => (
        <Grid item xs={12} sm={3}>
          <Thumbnail
            goTo={() => goTo(item.id)}
            style={cardStyle}
            key={item.id}
            title={item.name}
            description={item.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const placeContainerStyle = {
  backgroundColor: "#f8f9fa !important"
};

const cardStyle = {
  border: "1px solid rgba(0,0,0,.125)",
  transition: "none",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)",
  backgroundClip: "border-box",
  borderRadius: ".25em"
};
