import React, { useState } from "react";

export const SimpleCard = ({ label, img }) => {
  const [src, setSrc] = useState(img);
  const noPicture = "/assets/img/no-img.png";
  return (
    <div className="card">
      <div className="card-image">
        <img src={src || noPicture} onError={e => setSrc(noPicture)} />
      </div>
      <div style={titleStyle} className="card-content">
        <span>{label}</span>
      </div>
    </div>
  );
};

const titleStyle = {
  padding: "20px 10px",
  fontWeight: 600,
  borderTop: "1px solid rgba(0, 0, 0, 0.125)"
};
