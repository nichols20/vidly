import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import { loginUser } from "../authService";

class LoginForm extends Form {
  styles = {
    width: "30vw",
    paddingLeft: "2rem",
  };

  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  /* the schema doesn't need to be apart of the state because the schema isn't supposed to change
   the .label function allows you to create a friendly label for users to see
   instead of the label defined as the object.*/
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    //call the server
    try {
      const { data } = await loginUser(this.state.data);
      localStorage.setItem("token", data);
      this.props.history.push("/movies");
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
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;

/* In this next lesson we wanted to disbale the login button if there are errors present and enable it
when there are no errors present. We can accomplish this by using the disabled property inside of the button element
then you set that property to either true or false to dictate whether or not the element will be disabled. Instead of writing
a function to determine whether or not we should disable the button we can simply set the this.validate() function to determine
this. That is because if there are no errors the function will return null which is considered falsy meaning the button will not 
be disabled. Vice versa if there are errors returned that would make the object truthy which is the same as writing true, resulting
in the button being disabled. This implementation makes the code cleaner and easier to process.*/

//const userName = document.getElementById('username').value
//this would be the solution to obtain the value of an input field in vanilla javascript, however this isn't the approach
//you'd want to take using react jsx. In order to access the username element we would need to use a reference.
//to do this i first created a username object with the value React.createRef() this will create a ref object
//after this I then defined the ref attribute to be the username property we have just defined above.
//so now instead of using the document. keyword you would do this
//const username = this.username.current.value
//this ref has a property current which returns the dom element allowing us to access the value property.
//minimize the use of refs when it comes to building applications.
//username = React.createRef();
