import React, { Component } from 'react';

class Pagination extends Component {
    render() { 
        return ( 
        <nav className='page navigation example'>
            <ul className='pagination'>
             <li className='page-item' onClick={this.props.page1}>
                 <a className='page-link' href='#'>1</a> 
            </li>
             <li className='page-item' onClick={this.props.page2}><a className='page-link' href='#'>2</a> </li>
             <li className='page-item' onClick={this.props.page3}><a className='page-link' href='#'>3</a> </li>
            </ul>
        </nav> 
      
      );
    }
}
 
export default Pagination;