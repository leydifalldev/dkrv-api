import React from 'react';
import { StatCard } from './Stat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faSmile, faFrown } from '@fortawesome/free-solid-svg-icons';

export const TotalVisitCard = () => 
  <StatCard
    cardStyle={cardStyle}
    leftIcon={<FontAwesomeIcon icon={faEye} size="2x" color={"#FFFFFF"}/>}
    leftIconStyle={leftIconStyle}
    leftIconColor={"#FFFFFF"}
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