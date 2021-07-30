import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      className="form-control"
      type="text"
      placeholder="Search Movies..."
    />
  );
};

export default SearchBar;

// onChange={this.props.onChange}
