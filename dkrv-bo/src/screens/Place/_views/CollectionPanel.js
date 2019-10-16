import React, { useState, useEffect } from "react";
import { SimpleCard } from "../../components/Card";
import {
  Tabs,
  Tab,
  Collapsible,
  CollapsibleItem,
  Icon
} from "react-materialize";

export const CollectionPanel = () => (
  <div className="row">
    <div className="col s2">
      <SimpleCard style={cardStyle} />
    </div>
  </div>
);

export const PlaceCollectionTabs = () => (
  <Tabs className="tabs" options={{ swipeable: true }}>
    <Tab title="Fast food" className="">
      <PlaceCollectionPanel />
    </Tab>
    <Tab title="Desserts" className="red">
      Test 2
    </Tab>
    <Tab title="Boissons" className="green">
      Test 3
    </Tab>
  </Tabs>
);

const PlaceCollectionPanel = () => (
  <Collapsible className="collapsible-without-margin">
    <CollapsibleItem header="Burger" icon={<Icon />}>
      <CollectionPanel />
    </CollapsibleItem>
    <CollapsibleItem
      header="Yeah, you do seem to have a little 'shit creek' ac…"
      icon={<Icon />}
    >
      Yeah, you do seem to have a little 'shit creek' action going.
    </CollapsibleItem>
    <CollapsibleItem
      header="You know, FYI, you can buy a paddle. Did you not p…"
      icon={<Icon />}
    >
      You know, FYI, you can buy a paddle. Did you not plan for this
      contingency?
    </CollapsibleItem>
  </Collapsible>
);

const cardStyle = {
  border: "1px solid rgba(0,0,0,.125)",
  transition: "none",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)",
  backgroundClip: "border-box",
  borderRadius: ".25em"
};
