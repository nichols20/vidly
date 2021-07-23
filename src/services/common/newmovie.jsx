import React from "react";
import Joi from "joi-browser";
import Form from "./form";

class NewMovie extends Form {
  state = {
    data: { title: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
