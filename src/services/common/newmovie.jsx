import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import { saveMovie } from "../fakeMovieService";
import { Link } from "react-router-dom";

class NewMovie extends Form {
  state = {
    data: { title: "", genre: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
  };

  /*Currently I'm attempting to take form input data and pass it to a new movie object to add to the movie database. I'm going to apply this
  logic to the doSubmit function because this property will already be called after the save button has been clicked. First I started by creating
  an empty movie object.  */
  doSubmit = () => {
    const movie = {};
    movie.title = this.state.data.title;
    console.log(movie);

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
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
