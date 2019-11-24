import React from "react";
import { Thumbnail } from "../../../components";
import { useHistory } from "react-router-dom";

export const PlaceThumbnail = ({ place }) => {
  let history = useHistory();
  const goTo = id => {
    history.push(`/place/${id}`);
  };

  return (
    <Thumbnail
      goTo={() => goTo(place.id)}
      style={cardStyle}
      key={place.id}
      title={place.name}
      subtitle={place.categories[0]}
    />
  );
};

const cardStyle = {
  border: "1px solid rgba(0,0,0,.125)",
  transition: "none",
  width: 200,
  marginLeft: 10,
  marginBottom: 10,
  backgroundColor: "#FFFFFF",
  boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)",
  backgroundClip: "border-box",
  borderRadius: ".25em"
};
