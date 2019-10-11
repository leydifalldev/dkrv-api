import React from "react";
import { MainTopNav } from "../../components/Nav";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export const PlaceScreen = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <MainTopNav />
      </Route>
    </Switch>
  );
};
