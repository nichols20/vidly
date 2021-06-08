import React, {Component} from 'react'
import {getMovies} from './fakeMovieService'

class Movies extends Component{
    state ={
        movies: getMovies(),
        movieCount: 0
    }
    
    clickedDelete(movie){
        /* I had to look up the solution to figure out how to dynamically delete selected movies, once the delete button 
        is clicked inside of the table row it passes this function with the parameter movie which is defined in the .map 
        function the movie value is the iterated movie object in the this.state.movies array so each button created in the 
        map function takes the value f the iterated object allowing us to select a specific movie object. I then create
        a new object newMovies which will be the new array excluding the deleted object selected. this is done by using 
        the .filter method which passes each object to m._id except for the selected object to be deleted. we then use the
        this.setState method to ynamically change the state object and reassign the movies object to newMovies which is the
        newly iterated Array. */
        const newMovies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies: newMovies})
      }

    countMovies = ()=>{
        return (this.state.movieCount === 0) ? 'There are no movies in the Database' : `There are ${this.state.movieCount} movies in the database`
      }


    render(){
          return (
            <main className = 'container'>
              <h1>{this.countMovies()}</h1>
              <table className ='table'>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Genre</th>
                      <th>Stock</th>
                      <th>Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.movies.map(movie => 
                     <tr key={movie._id}>
                       <th style={{paddingLeft: '1rem'}}>{movie.title}</th>
                       <th>{movie.genre.name}</th>
                       <th>{movie.numberInStock}</th>
                       <th>{movie.dailyRentalRate}</th>
                       <th><button onClick={() => this.clickedDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></th> 
                    </tr>
                    )}
                  </tbody>
        
              </table>
            </main>
          );

    }
}

// The argument movie passed in the movies.map method cannot be the same as the element key or else it will throw an error
// To have the delete button register which movie is its parent element you can pass the movie object that is iterated
//To the arguement of the clickedDelete method 
export default Movies;