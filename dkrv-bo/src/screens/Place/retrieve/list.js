import React, { Fragment } from "react";
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
  const { loading, error, data } = useQuery(RETRIEVE_PLACE_LIST);
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
    <div className="row">
      {items.map(item => (
        <div className="col s2">
          <Thumbnail
            goTo={() => goTo(item.id)}
            style={cardStyle}
            key={item.id}
            title={item.name}
            description={item.description}
          />
        </div>
      ))}
    </div>
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
