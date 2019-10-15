import React from "react";
import { SideNav, SideNavItem, Button } from "react-materialize";

export const MainSideNav = props => (
  <SideNav fixed="true" trigger={<Button />} options={{ closeOnClick: true }}>
    <SideNavItem
      userView
      user={{
        name: "John Doe"
      }}
    />
    <SideNavItem subheader>Place</SideNavItem>
    <SideNavItem href="/place/list" icon="search">
      Recherche
    </SideNavItem>
    <SideNavItem href="/place" icon="add_circle_outline">
      Ajouter
    </SideNavItem>
    <SideNavItem divider />
    <SideNavItem subheader>Product</SideNavItem>
    <SideNavItem href="#!icon" icon="cloud">
      Product
    </SideNavItem>
  </SideNav>
);
