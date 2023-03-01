import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import App from "./components/App/App";
import axios from "axios";

// axios.defaults.baseURL =
  // "https://sdnii-cors-anywhere.herokuapp.com/cognate-lang.herokuapp.com";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
