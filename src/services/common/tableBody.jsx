import React, { Component } from 'react';
import _ from 'lodash'

class TableBody extends Component {

    render() { 
        //const {movies, onDelete, onLike}
        const { data, columns } = this.props
        return ( 
            <tbody>
             {data.map(item =>   
               <tr>
                 {columns.map(column => <td>{_.get(item, column.path)}</td>)}
               </tr>
             )}
            </tbody>
         );
    }
}
 
export default TableBody;

//<td><Like clickLike={() => onLike(movie)} Liked={movie.Liked}/></td>
//<td><button onClick={() => onDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></td>