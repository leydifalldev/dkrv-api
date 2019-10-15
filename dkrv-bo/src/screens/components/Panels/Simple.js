import React from 'react';

export const SimplePanel = ({ title, children, items = [] }) => (
  <div className="card w-100">
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">{items.map((item, index) => React.cloneElement(children, { key: index, item: item }))}</div>
    </div>
  </div>
);