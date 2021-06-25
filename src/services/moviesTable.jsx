import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';


class MoviesTable extends Component {
  
  columns = [
    {path: 'title', label: 'Title'},
    {path: 'genre.name', label: 'Genre'},
    {path: 'numberInStock', label: 'Stock'},
    {path: 'dailyRentalRate', label: 'Rate'},
    {
      key: 'like', 
      content: movie => <Like liked={this.props.movie.liked} onClick={() => this.props.onLike(movie)}/>
    },
    {
      key: 'delete',
      content: movie => <button onCLick={() => this.props.onDelete(movie)} className={'btn btn-danger btn-sm'}>Delete</button>
    }
  ]

  render() {
    console.log(this.rows)
    
    const {movies, sortColumn, onSort} = this.props
    
    return ( 
      <table className ='table'>
        <TableHeader sortColumn={sortColumn} onSort={onSort} columns={this.columns}/>
        <TableBody columns={this.columns} data={movies}/>
     </table>
     );
  }
}
 
export default MoviesTable;