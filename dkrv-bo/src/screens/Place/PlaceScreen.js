import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { PlaceList, PlaceDetail } from './retrieve';

export const PlaceScreen = () => {
  let { path } = useRouteMatch();
  console.log('path', path);
  return (
    <div>
      <Switch>
        <Route path={`${path}/list`}>
          <PlaceList />
        </Route>
        <Route path={`${path}/:id`} children={<PlaceDetail/>}/>
      </Switch>
    </div>
  );
};
