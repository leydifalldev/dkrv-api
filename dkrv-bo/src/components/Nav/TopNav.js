import React from "react";
import { Button, Icon } from "react-materialize";

export const MainTopNav = ({ onClick }) => (
  <nav>
    <div class="nav-wrapper">
      <span href="#" className="left">
        Logo
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
);
