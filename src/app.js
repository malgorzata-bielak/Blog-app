import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";

const store = configureStore();

const jsx = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
