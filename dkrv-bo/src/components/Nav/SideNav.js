import React from "react";
import { SideNav, SideNavItem, Button } from "react-materialize";

export const MainSideNav = props => (
  <SideNav fixed="true" trigger={<Button />} options={{ closeOnClick: true }}>
    <SideNavItem
      userView
      user={{
        background: "https://placeimg.com/640/480/tech",
        image: "static/media/react-materialize-logo.824c6ea3.svg",
        name: "John Doe"
      }}
    />
    <SideNavItem subheader>Place</SideNavItem>
    <SideNavItem href="#!icon" icon="search">
      Rechercher
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
