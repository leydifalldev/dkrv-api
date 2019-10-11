import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "./App.css";
import { MainLayout } from "./screens/main";

function App() {
  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export default App;
