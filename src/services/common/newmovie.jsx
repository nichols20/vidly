import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import { saveMovie } from "../fakeMovieService";

class NewMovie extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", dailyRentalRate: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    /* I included Joi.number so that users couldn't pass letter text inside these inputs only allowing numerical text. I also gave them a
    min and max to establish a range that users must stick to when filling inputs.*/
    numberInStock: Joi.number()
      .required()
      .label("Number In Stock")
      .min(0)
      .max(100),
    dailyRentalRate: Joi.number().required().label("Rate").min(0).max(10),
  };

  /*Currently I'm attempting to take form input data and pass it to a new movie object to add to the movie database. I'm going to apply this
  logic to the doSubmit function because this property will already be called after the save button has been clicked. To accomplish this take I
  first created a movie object that will take the value of the data object inside the state. I then call the saveMovie function and pass the defined
  movie object to it which will cause that new movie object to be pushed into the database of movies. After that I push "/Movies" to history.push() 
  so that the browser redirects the user to the movies page once the save button is clicked.*/
  doSubmit = () => {
    const movie = this.state.data;
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
