import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { RETRIEVE_PLACE_DETAIL } from "../../../network/index";
import { ExpandedCard } from "../../components/Card";
import { MainTab } from "../_views/MainTab";

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

  return data && data.getPlace ? (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <ExpandedCard
            title={data.getPlace.name}
            label={data.getPlace.description}
          />
        </Grid>
        <Grid item xs={12} sm={10}>
          <MainTab />
        </Grid>
      </Grid>
    </div>
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