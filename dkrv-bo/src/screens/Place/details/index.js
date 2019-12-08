import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import Grid from "@material-ui/core/Grid";
import { useRouteMatch, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { RETRIEVE_PLACE_DETAIL } from "../../../network/index";
import { PlaceInfoPanel } from "./_views/InfoPanel";
import { PlaceDetailsTabs } from "./_views/PlaceDetailsTabs";
import { AddressPanel } from "./_views/AddressPanel";
import { DetailsThumbnail } from "./_views/DetailsThumbnail";
import { DetailsBar } from "./_views/DetailsBar";
import { PlaceProvider } from "./Context";
import CreateProductStepper from "./Product/Add/CreateProductStepper";

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
  const { enqueueSnackbar } = useSnackbar();
  let { path, url } = useRouteMatch();
  let { id } = useParams();
  const [place, setPlace] = useState({});

  const { loading, error, data } = useQuery(RETRIEVE_PLACE_DETAIL, {
    variables: { id }
  });
  if (error) {
    if (error.networkError) {
      enqueueSnackbar(String(error.networkError), { variant: "error" });
    }
    if (error.graphQLErrors) {
      error.graphQLErrors.map(error => {
        enqueueSnackbar(error.message, { variant: "error" });
      });
    }
  }

  return data && data.getPlace ? (
    <PlaceProvider value={data.getPlace}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DetailsBar data={data.getPlace} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <PlaceDetailsTabs data={data.getPlace} />
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
