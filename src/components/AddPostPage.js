import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostForm from "./PostForm";
import { addPost } from "../actions/posts";

class AddPostPage extends React.Component {
  onSubmit = post => {
    this.props.addPost(post);
    this.props.history.push("/");
  };

  render() {
    return <PostForm onSubmit={this.onSubmit} />;
  }
}

const mapDispatchToProps = (dispatch, _props) => ({
  addPost: post => dispatch(addPost(post))
});

AddPostPage.propTypes = {
  addPost: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddPostPage);
