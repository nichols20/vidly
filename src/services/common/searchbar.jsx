import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Search Movies..."
        />
      </div>
    );
  }
}

export default SearchBar;
