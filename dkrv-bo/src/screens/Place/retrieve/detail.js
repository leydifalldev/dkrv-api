import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import {useQuery} from '@apollo/react-hooks'
import { RETRIEVE_PLACE_DETAIL } from '../../../network/index';
import { SimpleCard } from '../../../components/Card';
import { LikesStatCard, TotalVisitCard } from '../../components/Card';

export const PlaceDetail = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(RETRIEVE_PLACE_DETAIL, {variables: {id}});
  console.log(data);
  return (
    <div className="row">
      <div className="col s3">
        <SimpleCard />
      </div>
      <div className="col s9">
        <StatPanel/>
        <PlaceInfoCollection/>
      </div>
    </div>
  );
}

const PlaceInfoCollection = () => (
  <div>
    <ul class="collection with-header">
        <li class="collection-header"><h4>First Names</h4></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
      </ul>
  </div>
)

const StatPanel = () => (
  <div className="row">
    <div className="col s4">
      <TotalVisitCard/>
    </div>
    <div className="col s4">
      <LikesStatCard/>
    </div>
    <div className="col s4">
      
    </div>
  </div>
)

