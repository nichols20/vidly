import React, { Component } from 'react';
import heart from './heart.png'

class Like extends Component {

    styles = {
        width: '25px',
        height: '25px',
      }
    
    render() {
        return (<img style={this.styles}src={heart}></img>);
    }
}
 
export default Like;