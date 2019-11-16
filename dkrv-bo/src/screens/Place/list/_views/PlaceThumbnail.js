import React from 'react';
import { Thumbnail } from '../../../components/Thumbnails';
import { useHistory } from "react-router-dom";

const arrayToString = (array) => {
  console.log(array);
  let str = "";
  array.map(item => {
    str += " - " + item
  });
  console.log(str);
  return str;
};

export const PlaceThumbnail = ({place}) => {
  let history = useHistory();
  const goTo = id => {
    history.push(`/place/${id}`);
  };

  return <Thumbnail
            goTo={() => goTo(place.id)}
            style={cardStyle}
            key={place.id}
            title={place.name}
            subtitle={arrayToString(place.categories)}
          />
        }

const cardStyle = {
  border: "1px solid rgba(0,0,0,.125)",
  transition: "none",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)",
  backgroundClip: "border-box",
  borderRadius: ".25em"
};