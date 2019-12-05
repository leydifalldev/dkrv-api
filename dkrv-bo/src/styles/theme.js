import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#4a148c",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#F76D1E",
      dark: "#ba000d",
      contrastText: "#000"
    }
  },
  overrides: {
    MuiTypography: {
      h3: {
        fontFamily: "Futura"
      }
    },
    MuiPaper: {
      root: {
        boxShadow: "none !important"
      }
    },
    MuiCard: {
      root: {
        backgroundColor: "#FFFFFF",
        boxShadow: "0 0.75rem 1.5rem rgba(18,38,63,.03) !important",
        border: "1px solid #edf2f9"
      }
    },
    MuiBox: {
      root: {
        backgroundColor: "transparent",
        padding: 24
      }
    },
    MuiList: {
      root: {
        //boxShadow: "0 0.75rem 1.5rem rgba(18,38,63,.03) !important",
        border: "none"
      }
    },
    MuiListItemText: {
      primary: {
        color: "#F76D1E",
        fontWeight: 600,
        fontSize: "13px"
      },
      secondary: {
        color: "#000000",
        fontWeight: 500,
        fontSize: "13px"
      }
    },
    MuiAvatar: {
      root: {
        height: 30,
        width: 30
      }
    },
    MuiMenuItem: {
      root: {
        lineHeight: 2.5,
        color: "#ffffff"
      }
    },
    MuiSvgIcon: {
      root: {
        height: "0.9em",
        width: "0.9em"
      }
    },
    MuiInputBase: {},
    MuiTabs: {
      root: {
        height: 47
      }
    }
  },
  status: {
    danger: "orange"
  }
});
