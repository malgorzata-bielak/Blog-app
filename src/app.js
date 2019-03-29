import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import AppRouter, { history } from "./routers/AppRouter";
import { firebase } from "./firebase/firebase";
import { startSetPosts } from "./actions/posts";
import { login, logout } from "./actions/auth";
import LoadingPage from "./components/LoadingPage";

const store = configureStore();

const jsx = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetPosts()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
