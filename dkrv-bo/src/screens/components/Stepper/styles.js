import { makeStyles } from "@material-ui/core/styles";

export const stepperStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 30,
    border: "1px solid #EFEFEF",
    borderRadius: 5
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#FFFFFF"
  }
}));

export const useColorlibStepIconStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: theme.shadows[3]
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
  }
}));
