import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import { useHistory, useRouteMatch, Link } from "react-router-dom";
import {
  AccountCircle,
  HomeWork,
  Search,
  AccountBalance,
  ImportantDevices,
  TrendingUp,
  PowerSettingsNew
} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
    color: "#FFF"
  },
  buttonLink: {
    marginBottom: 10
  }
});

export const Menu = () => {
  const classes = useStyles();
  let history = useHistory();
  const goTo = id => {
    history.push(`/place/${id}`);
  };

  return (
    <div style={styleRootContainer}>
      <div style={styleContainer}>
        <ButtonLink to={"#"} icon={<TrendingUp />} />
        <ButtonLink to={"#"} icon={<Search />} />
        <ButtonLink to={"/place/list"} icon={<HomeWork />} />
        <ButtonLink to={"/profile/list"} icon={<AccountCircle />} />
        <ButtonLink to={"#"} icon={<AccountBalance />} />
        <ButtonLink to={"#"} icon={<ImportantDevices />} />
      </div>
      <div>
        <PowerButton />
      </div>
    </div>
  );
};

const ButtonLink = ({ to, icon, inversedColor, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Link style={buttonLinkStyle} to={to}>
      <Fab aria-label="add" color="primary">
        {React.cloneElement(icon, { color: match ? "secondary" : "default" })}
      </Fab>
    </Link>
  );
};

const PowerButton = ({ to, icon, inversedColor, activeOnlyWhenExact }) => {
  return (
    <Fab style={buttonLinkStyle} color="primary" aria-label="add">
      <PowerSettingsNew style={{ color: "#fff" }} />
    </Fab>
  );
};

const buttonLinkStyle = {
  marginBottom: 10
};

const styleContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const styleRootContainer = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center"
};
