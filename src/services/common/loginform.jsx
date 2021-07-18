import React, { Component } from 'react';
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

    validate = () => {
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
        console.log(errors)
        this.setState({ errors })
        //if there are properties inside the errors object we will return from here and stop the function from submitting the form if not then the function will submit
        if (errors) return;


        //call the server 
        console.log('submitted')
    }

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({ account })
    };

    render() { 
        const {account} = this.state
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
                    />

                    <Input
                     name={'password'}
                     value={account.password}
                     label={"Password"}
                     onChange={this.handleChange}
                     styles={this.styles}
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
