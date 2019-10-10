import React, { useState } from "react";
import { noPicture } from "../../assets";

export const ThumbnailLarge = ({ item = {} }) => {
  const [img, setImg] = useState(item.src);

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-6">
          <img src={img || noPicture} onError={(e) => setImg(noPicture)} className="card-img-top" alt="thumbnail" />
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 className="card-title">{item.ref}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}