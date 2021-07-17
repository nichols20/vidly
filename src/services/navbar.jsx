import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends Component {
    styles = { 
        fontSize: '21px',
        color: 'white'
     }
    render() { 
        return (
            <nav className='navbar navbar-expand bg-dark mb-5'>
                <div className='m-2'>
                    <h1>Vidly</h1>
                </div>
                        <NavLink className=' nav-link ' style={this.styles} to='/Movies'>Movies</NavLink>
                        <NavLink className=' nav-link ' style={this.styles} to='/Customers'>Customers</NavLink>
                        <NavLink className=' nav-link ' style={this.styles} to='/Rentals'>Rentals</NavLink>
                        <NavLink className=' nav-link ' style={this.styles} to='/login'>Login</NavLink>
            </nav>
         );
    }
}
 
//Imported NavLink, when clicked it will send user to url /movies which will then allow movies Component to be Displayed
//Defined className navbar and bg-dark to create a bootstrap nav bar

export default NavBar;