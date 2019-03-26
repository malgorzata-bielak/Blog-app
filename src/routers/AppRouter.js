import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import EditPostPage from "../components/EditPostPage";
import AddPostPage from "../components/AddPostPage";
import DashboardPage from "../components/DashboardPage";
import ReadPostPage from "../components/ReadPostPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={AddPostPage} />
        <PrivateRoute path="/edit/:id" component={EditPostPage} />
        <PrivateRoute path="/read/:id" component={ReadPostPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
