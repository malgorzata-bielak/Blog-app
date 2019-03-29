import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostListItem = ({ title, id }) => (
  <div>
    <Link className="list-item" to={`/edit/${id}`}>
      <h3>{title}</h3>
    </Link>
  </div>
);

PostListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PostListItem;
