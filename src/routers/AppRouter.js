import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditPostPage from "../components/EditPostPage";
import AddPostPage from "../components/AddPostPage";
import DashboardPage from "../components/DashboardPage";
import Header from "../components/Header";
import ReadPostPage from "../components/ReadPostPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/read/:id" component={ReadPostPage} />
        <Route path="/" component={DashboardPage} exact />
        <Route path="/create" component={AddPostPage} />
        <Route path="/edit/:id" component={EditPostPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
