import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostForm from "./PostForm";
import { startAddPost } from "../actions/posts";

class AddPostPage extends React.Component {
  onSubmit = post => {
    this.props.startAddPost(post);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="content-container">
        <PostForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, _props) => ({
  startAddPost: post => dispatch(startAddPost(post)),
});

AddPostPage.propTypes = {
  startAddPost: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(
  undefined,
  mapDispatchToProps,
  // { startAddPost } // instead of mapDispatchToProps
)(AddPostPage);
