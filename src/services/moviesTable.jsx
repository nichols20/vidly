import React, { Component } from 'react';
import Like from './common/like';


const MoviesTable = (props) => {

    const {movies, onDelete, onLike} = props

    console.log(onLike)

    return ( 
        <table className ='table'>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
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
 
export default MoviesTable;



/*
class MoviesTable extends Component {
    constructor(props){
        super()
        props = this.props
    }
    render() { 
        return ( 
            <table className ='table'>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th/>
                        <th/>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.movies.map(movie =>
                        <tr key={movie._id}>
                          <td style={{paddingLeft: '1rem'}}>{movie.title}</td>
                          <td>{movie.genre.name}</td>
                          <td>{movie.numberInStock}</td>
                          <td>{movie.dailyRentalRate}</td>
                          <td><Like clickLike={() => this.props.onLike(movie)} Liked={movie.Liked}/></td>
                          <td><button onClick={() => this.props.onDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></td>
                       </tr>
                      )}
                    </tbody>
                  </table>
         );
    }
}
 
export default MoviesTable;
*/
