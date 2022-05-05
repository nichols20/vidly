import React from "react";
import Form from "./form";
import Joi from "joi-browser";
import { registerUser } from "../userService";
import { loginUser } from "../authService";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username").email(),
    password: Joi.string().required().label("Password").min(5),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      await registerUser(this.state.data);
      const { data } = await loginUser(this.state.data);
      localStorage.setItem("token", data);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "Password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
