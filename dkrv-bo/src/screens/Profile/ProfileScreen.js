import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { ProfileListLayout } from "./List";

export const ProfileScreen = () => {
  let { path } = useRouteMatch();
  console.log("path", path);
  return (
    <div>
      <Switch>
        <Route path={`${path}/list`}>
          <ProfileListLayout />
        </Route>
      </Switch>
    </div>
  );
};
