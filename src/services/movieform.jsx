import React from "react";
import { getMovie } from "./fakeMovieService";
import { saveMovie } from "./fakeMovieService";
import Joi from "joi-browser";
import Form from "./common/form";

/*Inside of this component I'm aiming to create a MovieForm that will populate the inputs of a saved movie and allows the user to edit those
inputs to then save it and push the reedited movie object back to the database */
class MovieForm extends Form {
  async componentDidMount() {
    let movie = await getMovie(this.props.match.params.id);

    this.setState({
      data: {
        title: movie.data.title,
        genre: movie.data.genre.name,
        numberInStock: movie.data.numberInStock,
        dailyRentalRate: movie.data.dailyRentalRate,
      },
    });
  }

  /*First I created a movie Object that takes the getMovie function with the match.params.id paramter This is supposed to contain the id of the selected
  movie the function will then search in the movies array for an object with that corresponding Id and then will return that object. */

  /*AfterWards I created a state with the data and errors object. Inside of data I have title genre numberInStock and dailyRentalRate which
  all equal their previous input values and will be displayed as such until the user edits it himself. */

  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
  };

  /*I created a standard schema the only difference in this one Is the Joi.number() which requires numerical inputs instead of alphabet characters.
  I also gave them ranges depending on the input that I was working with. */
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

  /*Once the user clicks save an initialized movie object will take the movie attributes passed inside of the data state it will also take on the id of
  the chosen movie as well as the boolean statement of whether or not it's been liked. We then call the saveMovie function which takes the edited movie
  object and updates it to the movies array. Finally we use this.props.history.push to redirect the user back to the movies page upon completion of the movie
  form. */
  doSubmit = () => {
    const movie = this.state.data;
    //movie.Liked = this.movie.Liked;
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
