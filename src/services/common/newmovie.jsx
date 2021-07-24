import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import { saveMovie } from "../fakeMovieService";

class NewMovie extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "" },
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

  /*Currently I'm attempting to take form input data and pass it to a new movie object to add to the movie database. I'm going to apply this
  logic to the doSubmit function because this property will already be called after the save button has been clicked. First I started by creating
  an empty movie object.  */
  doSubmit = () => {
    const movie = this.state.data;
    console.log(movie.genre);
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
          {this.renderInput("numberInStock", "numberInStock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
