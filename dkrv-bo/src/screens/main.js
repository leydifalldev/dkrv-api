import React from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PlaceScreen } from "./Place/PlaceScreen";
import { TopNavBar } from "./_views/TopNavBar";

export const MainLayout = () => (
  <Router class="main-container">
    <TopNavBar />
    <div id="body-container">
      <div class="content-container">
        <ContentLayout />
      </div>
    </div>
  </Router>
);

export const MainTopNav = ({ title, onClick }) => (
  <div className="navbar-fixed">
    <nav style={navTopStyle}>
      <div className="nav-wrapper">
        <span href="#" className="left navbar-top-title">
          DKRV
        </span>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Button style={loginButtonStyle} node="a">
              Déconnexion
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export const ContentLayout = () => (
  <Switch>
    <Route path="/place">
      <PlaceScreen />
    </Route>
  </Switch>
);

const navTopStyle = {
  backgroundColor: "#372374"
};

const loginButtonStyle = {
  backgroundColor: "#F76D1E"
};
