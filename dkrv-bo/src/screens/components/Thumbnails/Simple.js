import React, { useState } from 'react';
import { noPicture } from "../../assets";

const noDef = "Restaurant non défini";

export const Thumbnail = ({ item }) => {
  const [img, setImg] = useState(item.src);
  const [logo, setLogo] = useState(item.logo);

  return (
    <div className="thumbnail__simple card card-sm">
      <img src={img || noPicture} onError={(e) => setImg(noPicture)} className="thumbnail__simple__img card-img-top" alt="thumbnail" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <img src={logo || noPicture} onError={(e) => setLogo(noPicture)} className="thumbnail__simple__logo" alt="logo" />
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span className="">{item.place || noDef}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Priorité
          <span className="badge badge-primary badge-pill">{item.order}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Prix
    <span>{item.price} {item.currency}</span>
        </li>
      </ul>
      <div className="card-footer">

      </div>
    </div>
  );
}