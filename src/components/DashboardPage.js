import React from "react";
import PropTypes from "prop-types";
import Filters from "./Filters";
import PostList from "./PostList";

const DashboardPage = props => (
  <div>
    <Filters history={props.history} />
    <PostList />
  </div>
);

DashboardPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default DashboardPage;
