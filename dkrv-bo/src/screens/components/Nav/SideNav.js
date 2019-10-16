import React from "react";
import { SideNav, SideNavItem, Button } from "react-materialize";
import { Link, NavLink } from "react-router-dom";

export const MainSideNav = props => (
  <SideNav fixed="true" trigger={<Button />} options={{ closeOnClick: true }}>
    <SideNavItem
      userView
      user={{
        name: "John Doe"
      }}
    />
    <SideNavItem subheader>Place</SideNavItem>
    <NavLink
      className="sidenav-item-link"
      activeStyle={activeStyle}
      to="/place/list"
    >
      <i class="material-icons">search</i>
      <span className="link-label">Recherche</span>
    </NavLink>

    <NavLink
      className="sidenav-item-link"
      activeStyle={activeStyle}
      to="/place/create"
    >
      <i class="material-icons">control_point</i>
      <span className="link-label">Ajouter</span>
    </NavLink>

    <SideNavItem divider />
    <SideNavItem subheader>Product</SideNavItem>
    <SideNavItem href="#!icon" icon="cloud">
      Product
    </SideNavItem>
  </SideNav>
);

const activeStyle = {
  borderRight: "3px solid #F76E1D"
};
