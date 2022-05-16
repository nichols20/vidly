import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";
import { getCurrentUser } from "./authService";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/Movies/${movie._id}`} movie={movie}>
          {movie.title}
        </Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like Liked={movie.Liked} clickLike={() => this.props.onLike(movie)} />
      ),
    },
  ];

  delete = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className={"btn btn-danger btn-sm"}
      >
        Delete
      </button>
    ),
  };

  render() {
    const { movies, sortColumn, onSort } = this.props;

    if (getCurrentUser()) this.columns.push(this.delete);

    //if (this.props.user) this.columns;

    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
