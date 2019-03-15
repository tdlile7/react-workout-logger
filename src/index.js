import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const loader = document.getElementById("loading-container");

// Allows loader to be revealed again when subcomponents load data
const showLoader = () => loader.classList.remove("hide-loader");
const hideLoader = () => loader.classList.add("hide-loader");

ReactDOM.render(
  <BrowserRouter>
    <App showLoader={showLoader} hideLoader={hideLoader} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
