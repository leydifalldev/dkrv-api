import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import logo from "./logo.svg";
import 'jquery';
import 'materialize-css/dist/js/materialize.js';
import "./App.css";
import { Modal, Button } from 'react-materialize';
import { MainLayout } from './layouts/main';

function App() {
  const trigger = <Button>Open Modal</Button>;
  return (
    <div className="App">
      <MainLayout/>
    </div>
  );
}

export default App;
