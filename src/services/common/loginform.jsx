import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class LoginForm extends Component {
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

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    //this stops the form from commiting a full page reload. Prevents default action
    e.preventDefault();

    //this errors object will either equal null or the errors object that was defined in the validate function
    const errors = this.validate();
    //sets the state errors to equal the locally defined errors if truthy if not it will be set to equal an empty object,
    //this is done to prevent a bug from occuring; The bug would occur if the errors object equalled null because in later
    //code we target the error.username property this you can't do if the  error object equals null because you can't
    //target null.username this will just result in your application crashing. errors should always be set to an object!!
    this.setState({ errors: errors || {} });
    //if there are properties inside the errors object we will return from here and stop the function from submitting the form if not then the function will submit
    if (errors) return;

    //call the server
    console.log("submitted");
  };

  validateProperty = ({ name, value }) => {
    //Instead of heard coding username or password to equal the input value we can use computed properties to simplify this issue
    //Using square brackets allows you to pass a defined object as the name of a newly defined object. In this scenario [name] will
    //either equal username or password and it will set the value of that property to whatever value was passed through this function.
    //[username] : 'jimmyjim123'
    const obj = { [name]: value };
    /* the second property I need to pass in the joi.validate function is the schema however currently we cannot pass this.schema because 
     that will not only validate the whole form when we are just trying to validate one single input but the system will also send errors back
     so to solve this problem I'm going to create a schema object that will dynamically pass & validate the selected input.*/
    //My attempt to solve this was setting the [name] value to Joi.string().required().label() however doing this is more work because we
    //already have an object that has this value stored a better way to write this would be setting it to this.
    const schema = { [name]: this.schema[name] }; //this is cleaner and easier to read
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    /*Now that I have created a validate function on form submission I want to create a
        method that will validate the form after each change in the input field. First
        I'm going to define an errors object that will take the value of the errors property
        inside the state object.*/
    const errors = { ...this.state.errors };
    /* Then I created a seperate errorMessage object that will equal a string describing the
        error that is occuring this message will then be the value to the errors name property  */
    const errorMessage = this.validateProperty(input);
    /*Then if the errorMessage object is truthy we're going to set the value to the errors 
        property that is defined is the bracket. Meaning if the input name is username the code
        will set the value to the username object and if the input name is password vice versa */
    if (errorMessage) errors[input.name] = errorMessage;
    /* If we don't get an error message we will then delete the errors property so that 
        the error message will disappear. */ else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <Input
            name={"username"}
            value={data.username}
            label={"Username"}
            onChange={this.handleChange}
            styles={this.styles}
            error={errors.username}
          />

          <Input
            name={"password"}
            value={data.password}
            label={"Password"}
            onChange={this.handleChange}
            styles={this.styles}
            error={errors.password}
          />

          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
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
