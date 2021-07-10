import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Movies from './services/movies';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <nav className='navbar bg-dark'>
                <NavLink to='/Movies'>Movies</NavLink>
            </nav>
         );
    }
}
 
//Imported NavLink, when clicked it will send user to url /movies which will then allow movies Component to be Displayed
//Defined className navbar and bg-dark to create a bootstrap nav bar

export default NavBar;