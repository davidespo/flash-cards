import React from "react";
import ReactDOM from "react-dom/client";
import store from "./rdx/store";
import { getPersistor } from "@rematch/persist";

import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";

import App from "./ui/App";

import "./index.css";

const persistor = getPersistor();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>
);
