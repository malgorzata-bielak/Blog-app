import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostListItem = ({ title, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{`${title.trim()}...`}</h3>
    </Link>
  </div>
);

PostListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default PostListItem;
