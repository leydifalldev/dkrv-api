import React from "react";
import { client } from './network';
import { ApolloProvider } from "@apollo/react-hooks";
import "materialize-css/dist/css/materialize.min.css";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "./App.css";
import { MainLayout } from "./screens/main";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
          <MainLayout />
      </ApolloProvider>
    </div>
  );
}

export default App;
