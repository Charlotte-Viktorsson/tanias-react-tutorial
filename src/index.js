import React from "react";
import ReactDOM from "react-dom";
//import App from "./components/App";
import App from "./components/Api";
import "./index.css";

//ReactDOM.render(WhatToRender, WhereToRenderIt);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
