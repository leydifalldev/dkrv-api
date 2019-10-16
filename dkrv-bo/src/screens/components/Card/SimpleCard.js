import React, { useState } from "react";

export const SimpleCard = ({ title, label, img }) => {
  const [src, setSrc] = useState(img);
  const noPicture = "/assets/img/no-img.png";
  return (
    <div className="card">
      <div className="card-image">
        <img src={src || noPicture} onError={e => setSrc(noPicture)} />
        <span class="card-title">Card Title</span>
        <a class="btn-floating halfway-fab waves-effect waves-light red">
          <i class="material-icons">add</i>
        </a>
      </div>
      <div className="card-content">
        <span class="card-title">{title}</span>
        <p>{label}</p>
      </div>
    </div>
  );
};

const titleStyle = {
  padding: "20px 10px",
  fontWeight: 600,
  borderTop: "1px solid rgba(0, 0, 0, 0.125)"
};
