import React, { Component } from 'react';
import _ from 'lodash'

class TableBody extends Component {
    renderCell = (item, column) => {
        if (column.content) return column.content(item)

        return _.get(item,column.path)
    }

    render() { 
        //const {movies, onDelete, onLike}
        const { data, columns } = this.props
        return ( 
            <tbody>
             {data.map(item =>   
               <tr>
                 {columns.map(column => <td>{this.renderCell(item, column)}</td>)}
               </tr>
             )}
            </tbody>
         );
    }
}
 
export default TableBody;

//<td><Like clickLike={() => onLike(movie)} Liked={movie.Liked}/></td>
//<td><button onClick={() => onDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></td>