import React, { Component } from 'react';
import Joi from "joi-browser"
import Input from './input';

class LoginForm extends Component {

    styles = {
        width: "30vw",
        paddingLeft: "2rem"
    }

    state = {
        account: {username: '', password: ''},
        errors: {}
    }

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    }

    validate = () => {
        const result = Joi.validate(this.state.account, this.schema)
        console.log(result)

        const {account} = this.state
        const errors = {}

        if (account.username.trim() === '')
            errors.username = "Username is required"
        
        if (account.password.trim() === '')
            errors.password = "Password is required"
            
        // If there are no properties inside the errors object the validate function will return null signifying no errors. If there are properties inside
        //the errors object the function will return the errors object
        return Object.keys(errors).length === 0 ? null : errors;
    }

    username = React.createRef()


    handleSubmit = e => {
        //this stops the form from commiting a full page reload. Prevents default action
        e.preventDefault()

        //this errors object will either equal null or the errors object that was defined in the validate function
        const errors = this.validate()
        //sets the state errors to equal the locally defined errors if truthy if not it will be set to equal an empty object,
        //this is done to prevent a bug from occuring; The bug would occur if the errors object equalled null because in later
        //code we target the error.username property this you can't do if the  error object equals null because you can't 
        //target null.username this will just result in your application crashing. errors should always be set to an object!!
        this.setState({ errors: errors || {} })
        //if there are properties inside the errors object we will return from here and stop the function from submitting the form if not then the function will submit
        if (errors) return;


        //call the server 
        console.log('submitted')
    }

    validateProperty = ({name, value}) => {
        if (name === 'username') {
            if (value.trim() === '') return 'Username is required'
        }

        if (name === 'password') {
            if (value.trim() === '') return 'Password is required'
        }
        

    }

    handleChange = ({currentTarget: input}) => {
        /*Now that I have created a validate function on form submission I want to create a
        method that will validate the form after each change in the input field. First
        I'm going to define an errors object that will take the value of the errors property
        inside the state object.*/
        const errors = {...this.state.errors}
        /* Then I created a seperate errorMessage object that will equal a string describing the
        error that is occuring this message will then be the value to the errors name property  */
        const errorMessage = this.validateProperty(input)
        /*Then if the errorMessage object is truthy we're going to set the value to the errors 
        property that is defined is the bracket. Meaning if the input name is username the code
        will set the value to the username object and if the input name is password vice versa */
        if (errorMessage) errors[input.name] = errorMessage
        /* If we don't get an error message we will then delete the errors property so that 
        the error message will disappear. */
        else delete errors[input.name]

        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({ account, errors })
    };

    render() { 
        const {account, errors} = this.state
        return ( 
            <div>
                <h1>Login</h1>

                <form onSubmit={this.handleSubmit}>
                    
                    <Input 
                     name={'username'} 
                     value={account.username} 
                     label={"Username"} 
                     onChange={this.handleChange}
                     styles={this.styles}
                     error={errors.username} 
                    />

                    <Input
                     name={'password'}
                     value={account.password}
                     label={"Password"}
                     onChange={this.handleChange}
                     styles={this.styles}
                     error={errors.password}
                    />

                    <button className="btn btn-primary" >Login</button>
                
                </form>
            </div>
         );
    }
}
 
export default LoginForm;





//const userName = document.getElementById('username').value
        //this would be the solution to obtain the value of an input field in vanilla javascript, however this isn't the approach 
        //you'd want to take using react jsx. In order to access the username element we would need to use a reference.
        //to do this i first created a username object with the value React.createRef() this will create a ref object 
        //after this I then defined the ref attribute to be the username property we have just defined above.
        //so now instead of using the document. keyword you would do this
        //const username = this.username.current.value
        //this ref has a property current which returns the dom element allowing us to access the value property.
        //minimize the use of refs when it comes to building applications. 
