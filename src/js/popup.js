import "../css/popup.css";
import Home from "./popup/Home.jsx";
import React from "react";
import { render } from "react-dom";


render(
  <Home/>,
  window.document.getElementById("app-container")
);
