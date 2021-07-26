import React from "react";
import { getMovie } from "./fakeMovieService";
import { saveMovie } from "./fakeMovieService";
import Joi from "joi-browser";
import Form from "./common/form";

/*
const MovieForm = ({ match, history }) => {
  const movie = getMovie(match.params.id);
  console.log(movie);


  return (
    <div>
      <h1 className="m-4">Movie Form {match.params.id}</h1>
      <button
        className="btn btn-primary m-4"
        onClick={() => history.push("/Movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;

*/

class MovieForm extends Form {
  movie = getMovie(this.props.match.params.id);

  state = {
    data: {
      title: this.movie.title,
      genre: this.movie.genre.name,
      numberInStock: this.movie.numberInStock,
      dailyRentalRate: this.movie.dailyRentalRate,
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .label("Number In Stock")
      .min(0)
      .max(100),
    dailyRentalRate: Joi.number().required().label("Rate").min(0).max(10),
  };

  doSubmit = () => {
    const movie = this.state.data;
    movie._id = this.movie._id;
    movie.Liked = this.movie.Liked;
    saveMovie(movie);
    this.props.history.push("/Movies");
  };
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "numberInStock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
