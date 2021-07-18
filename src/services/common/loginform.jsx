import React, { Component } from 'react';
import reactDom from 'react-dom';

class LoginForm extends Component {

    styles = {
        width: "30vw",
        paddingLeft: "2rem"
    }

    state = {
        account: {username: '', password: ''}
    }

    username = React.createRef()


    handleSubmit = e => {
        e.preventDefault()

        //const userName = document.getElementById('username').value
        //this would be the solution to obtain the value of an input field in vanilla javascript, however this isn't the approach 
        //you'd want to take using react jsx. In order to access the username element we would need to use a reference.
        //to do this i first created a username object with the value React.createRef() this will create a ref object 
        //after this I then defined the ref attribute to be the username property we have just defined above.
        //so now instead of using the document. keyword you would do this
        const username = this.username.current.value
        //this ref has a property current which returns the dom element allowing us to access the value property.
        //minimize the use of refs when it comes to building applications. 

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
                    <div className="form-group mb-3" style={this.styles}>
                        <label htmlFor="username" className="form-label">Username</label>
                        <input 
                         autoFocus
                         value = {account.username}
                         onChange={this.handleChange} 
                         name="username" 
                         id='username' 
                         type="text" 
                         className="form-control" 
                         />
                    </div>
                    <div className="form-group mb-3" style={this.styles}>

                        <label htmlFor="Password">Password</label>

                        <input 
                         value={account.password} 
                         onChange={this.handleChange}
                         name='password'
                         id='Password' 
                         type="text" 
                         className="form-control" 
                         />

                    </div>

                    <button className="btn btn-primary" >Login</button>
                
                </form>
            </div>
         );
    }
}
 
export default LoginForm;