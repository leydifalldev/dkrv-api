import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { Tabs, Tab } from "react-materialize";
import { RETRIEVE_PLACE_DETAIL } from "../../../network/index";
import { SimpleCard } from "../../components/Card";
import { PlaceCollectionTabs } from "../_views/CollectionPanel";
import {
  LikesStatCard,
  TotalVisitCard,
  NotationPanel
} from "../../components/Card";

export const PlaceDetail = () => {
  let { id } = useParams();

  const { loading, error, data } = useQuery(RETRIEVE_PLACE_DETAIL, {
    variables: { id }
  });

  return data && data.getPlace ? (
    <div className="row">
      <div className="col s3">
        <SimpleCard
          title={data.getPlace.name}
          label={data.getPlace.description}
        />
        <PlaceInfoContainer info={data.getPlace} />
        <PlaceAddressPanel location={data.getPlace.location} />
        <GastronomyPanel gastronomies={data.getPlace.gastronomies} />
      </div>
      <div className="col s9">
        <StatPanel />
        <PlaceInfoTabs />
        <PlaceCollectionTabs />
      </div>
    </div>
  ) : (
    <span>Veuillez patientez svp</span>
  );
};

const PlaceInfoContainer = props => (
  <ul class="collection with-header">
    <li class="collection-header">
      <span className="collection-label">Contact</span>
    </li>
    <li class="collection-item">
      <div className="collection-item-content">{props.info.id}</div>
    </li>
    <li class="collection-item">
      <div className="collection-item-content">
        <a href="#!" class="secondary-content">
          <i class="material-icons">call</i>
        </a>
        {props.info.phone}
      </div>
    </li>
    <li class="collection-item">
      <div className="collection-item-content">
        <a href="#!" class="secondary-content">
          <i class="material-icons">mail_outline</i>
        </a>
        {props.info.email}
      </div>
    </li>
  </ul>
);

const GastronomyPanel = ({ gastronomies }) => (
  <div>
    <ul class="collection with-header">
      <li class="collection-header">
        <span className="collection-label">Gastronomies</span>
      </li>
      {gastronomies && gastronomies.length ? (
        gastronomies.map(gastonomy => (
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
        ))
      ) : (
        <span>NR</span>
      )}
    </ul>
  </div>
);

const PlaceInfoTabs = () => (
  <Tabs className="tabs" options={{ swipeable: true }}>
    <Tab title="Horaires" className="">
      <SchedulePanel schedule={schedule} />
    </Tab>
    <Tab title="Photos" className="red">
      Test 2
    </Tab>
    <Tab title="Évènements" className="green">
      Test 3
    </Tab>
  </Tabs>
);

const PlaceAddressPanel = ({ location }) => (
  <div>
    <ul class="collection with-header">
      <li class="collection-header">
        <span className="collection-label">Adresse</span>
      </li>
      <li class="collection-item">
        <div className="collection-item-content">
          <a href="#!" class="secondary-content">
            <i class="material-icons">business</i>
          </a>
          {location.address || "NR"}
        </div>
      </li>
      <li class="collection-item">
        <div className="collection-item-content">
          <a href="#!" class="secondary-content">
            <i class="material-icons">place</i>
          </a>
          {location.cpc || "NR"}
        </div>
      </li>
      <li class="collection-item">
        <div className="collection-item-content">
          <a href="#!" class="secondary-content">
            <i class="material-icons">center_focus_weak</i>
          </a>
          {location.zone || "NR"}
        </div>
      </li>
      <li class="collection-item">
        <div className="collection-item-content">
          <a href="#!" class="secondary-content">
            <i class="material-icons">gps_fixed</i>
          </a>
          <span>
            Lng:
            {location.coordinate && location.coordinate.lng
              ? location.coordinate.lng
              : "NR"}
          </span>
          <span>
            Lat:
            {location.coordinate && location.coordinate.lat
              ? location.coordinate.lat
              : "NR"}
          </span>
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
    <div className="col s4">
      <NotationPanel />
    </div>
  </div>
);

const schedule = [
  {
    date: "lundi",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  },
  {
    date: "mardi",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  },
  {
    date: "mercredi",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  },
  {
    date: "jeudi",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  },
  {
    date: "vendredi",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  },
  {
    date: "samedi",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  },
  {
    date: "dimancke",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  }
];

const SchedulePanel = ({ schedule }) => {
  if (!schedule) {
    return <span>Non renseigné</span>;
  }
  return (
    <table className="schedule-table">
      <thead>
        <tr>
          <th>Jour</th>
          <th>Ouverture matinale</th>
          <th>Fermitureture matinale</th>
          <th>Ouverture sec periode</th>
          <th>Fermitureture sec periode</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map(item => (
          <tr>
            <td>{item.date}</td>
            <td>{item.start_am}h</td>
            <td>{item.end_am}h</td>
            <td>{item.start_pm}h</td>
            <td>{item.end_pm}h</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
