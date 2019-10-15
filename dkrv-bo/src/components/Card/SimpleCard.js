import React, { useState } from 'react';

export const SimpleCard = props => {
  const [src, setSrc] = useState(props.img);
  const noPicture = "/assets/img/no-img.png";
  return (
    <div style={props.style}className="card">
      <div className="card-image">
        <img src={src || noPicture} onError={(e) => setSrc(noPicture)}/>
      </div>
      <div style={titleStyle} className="card-content">
         <span>{props.item ? props.item.name : 'undefine'}</span>
      </div>
    </div>
  );
};

const titleStyle = {
  padding: '20px 10px',
  fontWeight: 600,
  borderTop: '1px solid rgba(0, 0, 0, 0.125)',
}
