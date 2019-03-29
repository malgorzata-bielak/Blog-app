import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostListItem from "./PostListItem";
import visiblePosts from "../selectors/visiblePosts";

const PostList = props => (
  <div className="">
    <div className="list-body">
      {props.posts.length === 0 ? (
        <p className="message">No posts</p>
      ) : (
        props.posts.map(post => {
          return <PostListItem key={post.id} {...post} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  posts: visiblePosts(state.posts, state.filters),
});

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(PostList);
