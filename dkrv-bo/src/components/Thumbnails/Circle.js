import React, { useState } from 'react';
import { noPicture } from "../../assets";

export const CircleThumbnail = ({ item }) => {
  const [src, setSrc] = useState(item.src);

  return (
    <div className="thumbnail thumbnail__circle">
      <img src={src || noPicture} onError={(e) => setSrc(noPicture)} className="rounded-circle" alt="..." />
      <div>{item.name}</div>
    </div>
  )
};