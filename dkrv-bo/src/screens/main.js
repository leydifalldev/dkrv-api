import React from "react";
import { Button, Icon, Breadcrumb } from "react-materialize";
import { MainSideNav } from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PlaceScreen } from "./Place/PlaceScreen";

export const MainLayout = () => (
  <Router class="main-container">
    <MainTopNav title="DKRV" />
    <div id="body-container">
      <div class="side-nav-container">
        <MainSideNav />
      </div>
      <div class="content-container">
        <MainBreadcrumb />
        <ContentLayout />
      </div>
    </div>
  </Router>
);

const MainBreadcrumb = () => (
  <Breadcrumb className="breadcrumb teal">
    <a href="#">One</a>
    <a href="#">Two</a>
    <a href="#">Three</a>
  </Breadcrumb>
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
              <Icon right>fingerprint</Icon>
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
