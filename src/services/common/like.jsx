import React, { Component } from 'react';
import heart from './heart.png'
import heartfilled from './heartfilled.png'

class Like extends Component {

    styles = {
        width: '25px',
        height: '25px',
        cursor: 'pointer'
      }
    
    render() {
        return (<img style={this.styles}src={this.renderImage()} onClick={this.props.clickLike}></img>);
    }

    renderImage(){
        let image = (this.props.Liked === false) ? heart : heartfilled
        return image
    }
}
 
export default Like;