import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { RETRIEVE_PLACE_DETAIL } from "../../../network/index";
import { PlaceInfoPanel } from "../_views/InfoPanel";
import { MainTab } from "../_views/MainTab";
import { AddressPanel } from "./_views/AddressPanel";
import { DetailsThumbnail } from "../_views/DetailsThumbnail";
import { DetailsBar } from "../_views/DetailsBar";
import { PlaceProvider } from "../store/place.store";
import AddProductLayout from "./product/add.product";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  }
}));

const PlaceDetail = () => {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  let { id } = useParams();

  const { loading, error, data } = useQuery(RETRIEVE_PLACE_DETAIL, {
    variables: { id }
  });

  const place = data ? data.getPlace : null;

  return place ? (
    <PlaceProvider value={place}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DetailsBar id={place.id} name={place.name} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <DetailsThumbnail
              title={place.name}
              label={place.description}
            />
            <PlaceInfoPanel info={place} />
            <AddressPanel location={place.location} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Switch>
              <Route
                path={`${path}/product/add`}
                children={<AddProductLayout />}
              />
              <Route
                path={`${path}/`}
                children={<MainTab data={place} />}
              />
            </Switch>
          </Grid>
        </Grid>
      </div>
    </PlaceProvider>
  ) : (
    <span>Veuillez patientez svp</span>
  );
};

const schedule = [
  {
    date: "lundi",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  },
  {
    date: "mardi",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  },
  {
    date: "mercredi",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  },
  {
    date: "jeudi",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  },
  {
    date: "vendredi",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  },
  {
    date: "samedi",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  },
  {
    date: "dimancke",
    start_am: 9,
    end_am: 12,
    start_pm: 14,
    end_pm: 22
  }
];

export default PlaceDetail;
