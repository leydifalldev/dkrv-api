import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ThumbnailTable = ({ icon, item }) => (
  <div className="thumbnail">
    <ul className="list-group">
      <Header />
      {item.rows ? item.rows.map((row, index) => <Row />) : null}
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Mercredi
    <span className="">9h30 - 12 / 9h30 - 12</span>
      </li>
      <Footer />
    </ul>
  </div>
);

const Row = () => (
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span className="badge badge-primary badge-pill">14</span>
  </li>
)

const Header = () => (
  <button type="button" className="list-group-item list-group-item-action active">
    <FontAwesomeIcon icon="map-marker-alt" /> Corniche ouest
  </button>
);

const Footer = () => (
  <button type="button" className="list-group-item list-group-item-action list-group-item-dark">Supprimer</button>
);