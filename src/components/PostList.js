import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostListItem from "./PostListItem";
import visiblePosts from "../selectors/visiblePosts";

const PostList = props => (
  <div>
    {props.posts.length === 0 ? (
      <p>No posts</p>
    ) : (
      props.posts.map(post => {
        return <PostListItem key={post.id} {...post} />;
      })
    )}
  </div>
);

const mapStateToProps = state => ({
  posts: visiblePosts(state.posts, state.filters)
});

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps)(PostList);
