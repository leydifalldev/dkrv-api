import React from "react";
import { StatCard } from "./Stat";

export const NotationPanel = () => (
  <StatCard
    cardStyle={cardStyle}
    leftIcon={
      <i style={{ color: "#F8F801" }} class="material-icons small">
        star
      </i>
    }
    leftIconStyle={leftIconStyle}
    leftIconColor={"#FFFFFF"}
    rightLabel={9}
    rightLabelStyle={rightLabelStyle}
  />
);

const rightLabelStyle = {
  fontSize: 20,
  fontWeight: 700,
  marginLeft: 5
};

const leftIconStyle = {
  color: "#FFFFFF"
};

const cardStyle = {
  backgroundColor: "#f76d1e"
};
