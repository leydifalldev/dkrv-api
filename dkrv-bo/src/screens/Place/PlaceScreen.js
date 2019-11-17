import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { PlaceListLayout } from "./List";
import PlaceDetail from "./Details";
import { CreatePlaceStepper } from "./Create";

export const PlaceScreen = () => {
  let { path } = useRouteMatch();
  console.log("path", path);
  return (
    <div>
      <Switch>
        <Route path={`${path}/create`}>
          <CreatePlaceStepper />
        </Route>
        <Route path={`${path}/list`}>
          <PlaceListLayout />
        </Route>
        <Route path={`${path}/:id`} children={<PlaceDetail />} />
      </Switch>
    </div>
  );
};
