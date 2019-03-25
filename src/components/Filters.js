import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchByText, sortByTitle, sortByDate } from "../actions/filters";

class Filters extends React.Component {
  onTextChange = e => {
    this.props.searchByText(e.target.value);
  };

  onSortChange = e => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "title") {
      this.props.sortByTitle();
    }
  };

  onClick = () => {
    this.props.history.push("/create");
  };

  render() {
    return (
      <div>
        <input
          value={this.props.filters.text}
          placeholder="Search posts"
          onChange={this.onTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="title">By Title</option>
          <option value="date">By Date</option>
        </select>
        <button onClick={this.onClick}>Add Post</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  searchByText: text => dispatch(searchByText(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByTitle: () => dispatch(sortByTitle())
});

Filters.propTypes = {
  filters: PropTypes.objectOf(PropTypes.string).isRequired,
  searchByText: PropTypes.func.isRequired,
  sortByDate: PropTypes.func.isRequired,
  sortByTitle: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
