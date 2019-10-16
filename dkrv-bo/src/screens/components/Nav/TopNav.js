import React from "react";
import { Button, Icon } from "react-materialize";

export const MainTopNav = ({ title, onClick }) => (
  <div className="navbar-fixed">
    <nav style={{ color: "#372374" }}>
      <div className="nav-wrapper">
        <span href="#" className="left navbar-top-title">
          DKRV
        </span>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <Button node="a">
              Ajouter
              <Icon right>add_circle</Icon>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

const navTopStyle = {
  color: "#372374"
};
