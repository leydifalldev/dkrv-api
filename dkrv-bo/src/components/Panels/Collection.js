import React from 'react';
import { SimplePanel } from '../Panels';
import { Thumbnail, ThumbnailTable, CircleThumbnail } from '../Thumbnails';

let map = new Map([
  ['circle', <CircleThumbnail />],
  ['simple', <Thumbnail />],
  ['table', <ThumbnailTable />],
]);

export const PanelCollection = ({ collections = [], component }) => (
  <div>
    {
      collections.length > 0 ? collections.map(
        (collection, index) => <SimplePanel key={index} title={collection.label} children={map.get(collection.component)} items={collection.items} />) : null
    }
  </div>
);