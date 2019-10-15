import React from "react";
import { Button, Icon } from "react-materialize";
import { MainSideNav } from "../components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PlaceScreen } from "./Place/PlaceScreen";

export const MainLayout = () => (
  <Router class="main-container">
    <MainTopNav title="Product"/>
    <div id="body-container">
      <div class="side-nav-container">
        <MainSideNav />
      </div>
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
        <span href="#" className="left">
          {title}
        </span>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <Button style={loginButtonStyle} node="a">
              Ajouter
              <Icon right>add_circle</Icon>
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
  backgroundColor: '#372374',
}

const loginButtonStyle = {
  backgroundColor: '#F76D1E',
}
