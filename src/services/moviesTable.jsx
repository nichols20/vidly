import React, { Component } from 'react';
import Like from './common/like';


class MoviesTable extends Component {

  raiseSort = path => {
    // this function takes the sortcolumn object from the state of movies then reapplies it to a copy const of sortColumn
    const sortColumn = {...this.props.sortColumn}
    //if the path of sortcolumn equals the path object thrown in the raiseSort function the sortColumn order
    //will be descending if the order is ascending and if it's ascending it will change to descending
    if (sortColumn.path === path)
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
    //elsewise the sortColumn.path will equal the path object thrown to function parameter and the sortColumn order will be ascending. 
    else {
      sortColumn.path = path
      sortColumn.order = 'asc'
    }
    //then finally we call the onSort function and pass the new sortColumn object.
    this.props.onSort(sortColumn)
  }

  render() { 
    const {movies, onDelete, onLike} = this.props
    
    return ( 
      <table className ='table'>
      <thead>
        <tr>
          <th onClick={() => this.raiseSort('title')}>Title</th>
          <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
          <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
          <th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
          <th/>
          <th/>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie =>
          <tr key={movie._id}>
            <td style={{paddingLeft: '1rem'}}>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><Like clickLike={() => onLike(movie)} Liked={movie.Liked}/></td>
            <td><button onClick={() => onDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></td>
         </tr>
        )}
      </tbody>
     </table>
     );
  }
}
 
export default MoviesTable;