import React from "react";
import { MainSideNav } from "../components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PlaceScreen } from "./Place/PlaceScreen";

export const MainLayout = () => (
  <Router class="row main-container">
    <div class="col side-nav-container">
      <MainSideNav />
    </div>{" "}
    <div class="col content-container">
      <ContentLayout />
    </div>{" "}
  </Router>
);

export const ContentLayout = () => (
  <Switch>
    <Route exact path="/place">
      <PlaceScreen />
    </Route>
  </Switch>
);
