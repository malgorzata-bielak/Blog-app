import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ReadPostPage = props => (
  <div>
    <h1>{props.post.title}</h1>
    <p>{props.post.body}</p>
  </div>
);

const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => {
    return post.id === props.match.params.id;
  })
});

ReadPostPage.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.object
  }).isRequired
};

export default connect(mapStateToProps)(ReadPostPage);
