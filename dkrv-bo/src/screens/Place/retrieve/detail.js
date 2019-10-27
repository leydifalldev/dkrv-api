import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { RETRIEVE_PLACE_DETAIL } from "../../../network/index";
import { PlaceInfoPanel } from "../_views/InfoPanel";
import { MainTab } from "../_views/MainTab";
import { AddressPanel } from "../_views/AddressPanel";
import { DetailsThumbnail } from "../_views/DetailsThumbnail";
import { DetailsBar } from "../_views/DetailsBar";
import { ListProductsPanel } from "../_views/ListProductPanel";
import { PlaceProvider } from "../store/place.store";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  }
}));

export const PlaceDetail = () => {
  const classes = useStyles();
  let { id } = useParams();

  const { loading, error, data } = useQuery(RETRIEVE_PLACE_DETAIL, {
    variables: { id }
  });

  console.log(data);

  return data && data.getPlace ? (
    <PlaceProvider value={data.getPlace}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DetailsBar id={data.getPlace.id} name={data.getPlace.name} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <DetailsThumbnail
              title={data.getPlace.name}
              label={data.getPlace.description}
            />
            <PlaceInfoPanel info={data.getPlace} />
            <AddressPanel location={data.getPlace.location} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <MainTab data={data.getPlace} />
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
