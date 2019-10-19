import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/theme";
import { client } from "./network";
import { ApolloProvider } from "@apollo/react-hooks";
import "jquery";
import "./App.css";
import { MainLayout } from "./screens/MainLayout";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <MainLayout />
        </ThemeProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
