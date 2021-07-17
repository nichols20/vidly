import React, { Component } from 'react';

class LoginForm extends Component {

    styles = {
        width: "30vw",
        paddingLeft: "2rem"
    }

    handleSubmit = e => {
        e.preventDefault()

        //call the server 
        console.log('submitted')
    }
    render() { 
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group mb-3" style={this.styles}>
                        <label htmlFor="username" className="form-label">Username</label>
                        <input id='username' type="text" className="form-control" />
                    </div>
                    <div className="form-group mb-3" style={this.styles}>
                        <label htmlFor="Password">Password</label>
                        <input id='Password' type="text" className="form-control" />
                    </div>
                    <button className="btn btn-primary" >Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;