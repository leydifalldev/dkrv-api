import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { Tabs, Tab } from "react-materialize";
import { RETRIEVE_PLACE_DETAIL } from "../../../network/index";
import { SimpleCard } from "../../../components/Card";
import { LikesStatCard, TotalVisitCard } from "../../components/Card";

export const PlaceDetail = () => {
  let { id } = useParams();

  const { loading, error, place } = useQuery(RETRIEVE_PLACE_DETAIL, {
    variables: { id }
  });

  return (
    <div className="row">
      <div className="col s3">
        <SimpleCard label={"name"} />
      </div>
      <div className="col s9">
        <StatPanel />
        <PlaceInfoTabs />
      </div>
    </div>
  );
};

const PlaceInfoTabs = () => (
  <Tabs className="tabs" options={{ swipeable: true }}>
    <Tab title="Informations générales" active className="">
      <PlaceInfoCollection />
    </Tab>
    <Tab title="Horaires" className="red">
      Test 2
    </Tab>
    <Tab title="Photos" className="red">
      Test 2
    </Tab>
    <Tab title="Évènements" className="green">
      Test 3
    </Tab>
  </Tabs>
);

const PlaceInfoCollection = () => (
  <div>
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>First Names</h4>
      </li>
      <li class="collection-item">
        <div>
          Alvin
          <a href="#!" class="secondary-content">
            <i class="material-icons">send</i>
          </a>
        </div>
      </li>
      <li class="collection-item">
        <div>
          Alvin
          <a href="#!" class="secondary-content">
            <i class="material-icons">send</i>
          </a>
        </div>
      </li>
      <li class="collection-item">
        <div>
          Alvin
          <a href="#!" class="secondary-content">
            <i class="material-icons">send</i>
          </a>
        </div>
      </li>
      <li class="collection-item">
        <div>
          Alvin
          <a href="#!" class="secondary-content">
            <i class="material-icons">send</i>
          </a>
        </div>
      </li>
    </ul>
  </div>
);

const StatPanel = () => (
  <div className="row">
    <div className="col s4">
      <TotalVisitCard />
    </div>
    <div className="col s4">
      <LikesStatCard />
    </div>
    <div className="col s4"></div>
  </div>
);
