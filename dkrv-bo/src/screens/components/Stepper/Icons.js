import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useColorlibStepIconStyles } from "./styles";

export const CustomStepIcon = props => {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {props.icon}
    </div>
  );
};

CustomStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node
};
