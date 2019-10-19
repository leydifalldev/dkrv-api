import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faSmile,
  faFrown
} from "@fortawesome/free-solid-svg-icons";

export const StatCard = ({
  cardStyle,
  leftIcon,
  leftIconColor,
  leftLabel,
  leftLabelStyle,
  rightIcon,
  rightLabel,
  rightIconColor,
  rightLabelStyle
}) => (
  <div style={{ ...cardStyle, ...statCardStyle }} class="card-panel">
    <div style={infoContainerStyle}>
      {leftIcon}
      {leftLabel ? (
        <span style={leftLabelStyle} class="white-text">
          {leftLabel}
        </span>
      ) : null}
    </div>
    <div style={infoContainerStyle}>
      {rightIcon}
      {rightLabel ? (
        <span style={rightLabelStyle} class="white-text">
          {rightLabel}
        </span>
      ) : null}
    </div>
  </div>
);

const statCardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 15
};

const infoContainerStyle = {
  display: "flex",
  alignItems: "center"
};
