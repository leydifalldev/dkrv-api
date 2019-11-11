import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useColorlibStepIconStyles } from "./styles";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

export const ColorlibStepIcon = props => {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <FormatAlignJustifyIcon />,
    2: <AddPhotoAlternateIcon />,
    3: <VideoLabelIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node
};
