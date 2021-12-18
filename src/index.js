import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counter from "./Counter";
import App from "./App";
import "./index.css";

var store = createStore(counter);

ReactDOM.render (
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById("root")
);