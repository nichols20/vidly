import React, {Component} from 'react'
import {getMovies} from './fakeMovieService'
import { getGenres } from './fakeGenreService'
import Like from './common/like'
import Pagination from './common/pagination'
import { Paginate } from './utilities/paginate'
import Filter from './common/filtering'

class Movies extends Component{
    state ={
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        originalMovies: getMovies()

    }

    componentDidMount(){
      const genres = [{name: 'All Genres'}, ...getGenres()]

      this.setState({ movies: getMovies(), genres})
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

      handleFilter = (genre) => {
        //sets currentpage to 1 so movies filter and render even if user is on third page
        this.setState({ selectedGenre: genre, currentPage: 1});
        /*
        if (genre === 'all'){
          let movies = this.state.originalMovies
          this.setState({movies})
          return
        }
        const moviesHolder = [...this.state.originalMovies]
        const movies = moviesHolder.filter(movie => movie.genre.name === genre)
        this.setState({movies})
        */
      }


    render(){
      /* Destructured this.state.movies.length to count then created if statement to illustrate how many movies there were in the
      database and if none were present another iteration would appear */
      const {length: count} = this.state.movies
      const {pageSize, currentPage, movies: allMovies, genres, selectedGenre} = this.state
      if (count === 0) return <h3>There are no movies in the Database.</h3>

      /* In my previous implementation of the filter method I filtered movies by setting the state with only movies whose
      genre was selected. it worked however I need to practice to stay away from using the set method as much as possible
      a better implementation of this is by creating a new object then having it equal the filtered movies state or unfiltered
      then instead of resetting the state send that variable to the paginate function with either the altered movies array
      or unaltered. the movies function will then return whatever movies are currently in the database and the state movies
      array stays the same. this allows you to continue deleting movies and because deleting a movie sets the state but 
      filtering doesn't create an old state like I had made it do before the movies will stay deleted and not reappear after
      deleting like it was before. overall the exercise was not too hard creating the filter tabs was easy however 
      my most trouble was with creating the function */
      const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies
      //movies equals the new array processed by the Paginate module, this object is updated each time a new page tab is clicked
      const movies = Paginate(filtered, currentPage, pageSize)

          return (
              <div className="row">
                <div className="col-2">
                 <Filter selectedItem={this.state.selectedGenre} genres={genres} handleFilter={this.handleFilter}/>
                </div>
                <div className="col">
                 <h3>Showing {filtered.length} Movies in the database</h3>
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
                          <td><Like clickLike={() => this.handleLike(movie)} Liked={movie.Liked}/></td>
                          <td><button onClick={() => this.clickedDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></td>
                       </tr>
                      )}
                    </tbody>
                  </table>
                  <Pagination
                   itemsCount={filtered.length}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChange={this.handlePageChange}
                  />
                </div>
              </div>
          );
        }
      }
  
// The argument movie passed in the movies.map method cannot be the same as the element key or else it will throw an error
// To have the delete button register which movie is its parent element you can pass the movie object that is iterated
//To the arguement of the clickedDelete method 
export default Movies;