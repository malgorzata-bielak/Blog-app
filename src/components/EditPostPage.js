import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostForm from "./PostForm";
import { startEditPost, startRemovePost } from "../actions/posts";

class EditPostPage extends React.Component {
  onSubmit = post => {
    this.props.startEditPost(this.props.post.id, post);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.startRemovePost(this.props.post.id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="content-container">
        <div className="edit-form">
          <Link className="link" onClick={this.onSubmit} to={`/read/${this.props.post.id}`}>
            Post readable at: {window.location.href}
          </Link>
        </div>
        <PostForm post={this.props.post} onSubmit={this.onSubmit} />
        <div className="edit-form">
          <button className="button button--remove" onClick={this.onRemove}>
            Remove Post
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find(post => post.id === props.match.params.id),
  };
};

const mapDispatchToProps = (dispatch, _props) => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startRemovePost: id => dispatch(startRemovePost(id)),
});

EditPostPage.propTypes = {
  startEditPost: PropTypes.func.isRequired,
  startRemovePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.number,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPostPage);
