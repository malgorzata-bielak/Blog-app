import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

export default class PostForm extends React.Component {
  static defaultProps = {
    post: undefined
  };

  constructor(props) {
    super(props);

    this.state = {
      title: props.post ? props.post.title : "",
      body: props.post ? props.post.body : "",
      createdAt: props.post ? moment(props.post.createdAt) : moment()
    };
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onBodyChange = e => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  };

  onSubmit = e => {
    const intro = this.state.body
      .trim()
      .split(" ")
      .map((item, index) => {
        if (index <= 2) {
          return item;
        }
      })
      .join(" ")
      .trim();
    const bodyTitle = this.state.body ? intro : "My new post";

    e.preventDefault();
    this.props.onSubmit({
      title: this.state.title ? this.state.title.trim() : bodyTitle,
      body: this.state.body.trim(),
      createdAt: this.state.createdAt.valueOf()
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <textarea
          placeholder="Add your post text"
          onChange={this.onBodyChange}
          value={this.state.body}
        />
        <button>Save Post</button>
      </form>
    );
  }
}

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.number
  })
};
