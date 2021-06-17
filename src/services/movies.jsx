import React, {Component} from 'react'
import {getMovies} from './fakeMovieService'
import { getGenres } from './fakeGenreService'
import Like from './common/like'
import Pagination from './common/pagination'
import { Paginate } from './utilities/paginate'
import Filter from './common/filtering'

class Movies extends Component{
    state ={
        movies: getMovies(),
        genres: getGenres(),
        currentPage: 1,
        pageSize: 4

    }

    styles = {
      display: 'flex',
      justifyContent: 'space-evenly'
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

      handleLike(movie){
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index] = {...movie}
        movies[index].Liked = !movies[index].Liked    
        this.setState({movies})
      }

      handlePageChange = page => {
        this.setState({currentPage: page})
      }

    render(){
      /* Destructured this.state.movies.length to count then created if statement to illustrate how many movies there were in the
      database and if none were present another iteration would appear */
      const {length: count} = this.state.movies
      const {pageSize, currentPage, movies: allMovies, genres} = this.state
      const {length: numberOfGenres} = this.state.genres

      if (count === 0) return <h3>There are no movies in the Database.</h3>

      //movies equals the new array processed by the Paginate module, this object is updated each time a new page tab is clicked
      const movies = Paginate(allMovies, currentPage, pageSize)

          return (
            <main className = 'container' style={this.styles}>
              <Filter genresCount={numberOfGenres} genres={genres}/>
              <div>
                <h3>Showing {count} Movies in the database</h3>
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
                      {movies.map(movie =>
                        <tr key={movie._id}>
                          <th style={{paddingLeft: '1rem'}}>{movie.title}</th>
                          <th>{movie.genre.name}</th>
                          <th>{movie.numberInStock}</th>
                          <th>{movie.dailyRentalRate}</th>
                          <th><Like clickLike={() => this.handleLike(movie)} Liked={movie.Liked}/></th>
                          <th><button onClick={() => this.clickedDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></th>
                       </tr>
                      )}
                    </tbody>
                </table>
                 <Pagination
                  itemsCount={count}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                  />
              </div>
            </main>
          );
        }
      }
  
// The argument movie passed in the movies.map method cannot be the same as the element key or else it will throw an error
// To have the delete button register which movie is its parent element you can pass the movie object that is iterated
//To the arguement of the clickedDelete method 
export default Movies;