import React from "react";

const Filters = () => (
  <div>
    <input placeholder="Search posts" />
    <select>
      <option>By Title</option>
      <option>By Date</option>
    </select>
    <button>Add Post</button>
  </div>
);

export default Filters;
