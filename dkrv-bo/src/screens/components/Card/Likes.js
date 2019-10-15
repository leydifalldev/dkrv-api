import React from 'react';
import { StatCard } from './Stat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faFrown } from '@fortawesome/free-solid-svg-icons';

export const LikesStatCard = () => 
  <StatCard
    cardStyle={cardStyle}
    leftIcon={<FontAwesomeIcon icon={faSmile} size="2x" color={"#FFFFFF"}/>}
    leftIconStyle={leftIconStyle}
    leftLabel={245}
    leftLabelStyle={leftLabelStyle}
    leftIconColor={"#FFFFFF"}
    rightIcon={<FontAwesomeIcon icon={faFrown} size="2x" color={"#FFFFFF"}/>} 
    rightIconColor={"#FFFFFF"}
    rightLabel={34}
    rightLabelStyle={rightLabelStyle}
  />

const leftLabelStyle = {
  fontSize: 20,
  fontWeight: 700,
  marginLeft: 5,
}

const rightLabelStyle = {
  fontSize: 20,
  fontWeight: 700,
  marginLeft: 5,
}

const leftIconStyle = {
  color: '#FFFFFF',
}

const rightIconStyle = {
  color: '#FFFFFF',
}

const cardStyle = {
  backgroundColor: '#f76d1e',
}