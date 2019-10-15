import React from "react";

export const CardPanel = ({ title, body }) => (
  <div className="card w-100">
    <div className="card-header">
      {title}
    </div>
    <div className="card-body">
      <div>{body}</div>
    </div>
  </div>
)