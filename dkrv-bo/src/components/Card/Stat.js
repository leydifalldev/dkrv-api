import React from 'react';
import { Icon } from "react-materialize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export const StatCard = ({
  leftIcon, 
  leftIconStyle, 
  leftLabel, 
  leftLabelStyle, 
  rightIcon, 
  rightLabel, 
  rightIconStyle,
  rightLabelStyle}) => (
  <div style={statCardStyle} class="card-panel teal">
    <div>
      {leftIcon ? <FontAwesomeIcon icon={faThumbsUp}/> : null}
      {leftLabel ? <span style={leftLabelStyle} class="white-text">{leftLabel}</span> : null}
    </div>
    <div>
      {rightIcon ? <Icon right small style={rightIconStyle}>{rightIcon}</Icon> : null}
      {rightLabel ? <span style={rightLabelStyle} class="white-text">{rightLabel}</span> : null}
    </div>
  </div>
)

const statCardStyle = {
  display: 'flex',
  justifyContent: 'space-between', 
}