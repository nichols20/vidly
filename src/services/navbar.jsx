import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Movies from './movies';
import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <nav className='navbar bg-dark'>
                    <NavLink className=' nav-link ' to='/Movies'>Movies</NavLink>
                    <NavLink className=' nav-link ' to='/Customers'>Customers</NavLink>
            </nav>
         );
    }
}
 
//Imported NavLink, when clicked it will send user to url /movies which will then allow movies Component to be Displayed
//Defined className navbar and bg-dark to create a bootstrap nav bar

export default NavBar;