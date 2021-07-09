import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Movies from './services/movies';
class NavBar extends Component {
    state = {  }
    render() { 
        return (
             
            <Route path='/Movies' component={Movies}/>
         );
    }
}
 
export default NavBar;