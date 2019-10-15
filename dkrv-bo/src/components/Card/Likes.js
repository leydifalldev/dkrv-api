import React from 'react';
import { StatCard } from './Stat';

export const LikesStatCard = () => 
  <StatCard 
    leftIcon="sentiment_very_satisfied"
    leftIconStyle={leftIconStyle}
    leftLabel={245}
    leftLabelStyle={leftLabelStyle}
    rightLabelStyle={rightLabelStyle}
    rightIcon="sentiment_very_dissatisfied" 
    rightIconStyle={rightIconStyle}
    rightLabel={34}
  />

const leftLabelStyle = {
  fontSize: 20,
  fontWeight: 700,
}

const rightLabelStyle = {
  fontSize: 20,
  fontWeight: 700,
}

const leftIconStyle = {
  color: '#FFFFFF',
}

const rightIconStyle = {
  color: '#FFFFFF',
}