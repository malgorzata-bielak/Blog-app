import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostForm from "./PostForm";
import { editPost, removePost } from "../actions/posts";

class EditPostPage extends React.Component {
  onSubmit = post => {
    this.props.editPost(this.props.post.id, post);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.removePost(this.props.post.id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Link to={`/read/${this.props.post.id}`}>
          Post readable at: {window.location.href}
        </Link>
        <PostForm post={this.props.post} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove Post</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find(post => post.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, _props) => ({
  editPost: (id, post) => dispatch(editPost(id, post)),
  removePost: id => dispatch(removePost(id))
});

EditPostPage.propTypes = {
  editPost: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.object
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostPage);
