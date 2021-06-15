import React, {Component} from 'react'
import {getMovies} from './fakeMovieService'

import Like from './common/like'
import Pagination from './common/pagination'

class Movies extends Component{
    state ={
        movies: getMovies(),
        originalMovies: getMovies()

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

    render(){
      /* Destructured this.state.movies.length to count then created if statement to illustrate how many movies there were in the
      database and if none were present another iteration would appear */
      const {length: count} = this.state.movies

      if (count === 0) return <h3>There are no movies in the Database.</h3>
          return (
            <main className = 'container'>
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
                    {this.state.movies.map(movie => 
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
               <Pagination page1 ={() => this.moviesPageOne(this.state.originalMovies)} page2 ={() => this.moviesPageTwo(this.state.movies)} page3={() => this.moviesPageThree()}/>
            </main>
          );
        }

        moviesPageOne(){
          const movies = this.state.originalMovies.filter(m => {if (this.state.originalMovies.indexOf(m) < 4) return m})
          console.log(movies)
          this.setState({movies})
        }

        moviesPageTwo(){
           const movies = this.state.originalMovies.filter(m => {if (this.state.originalMovies.indexOf(m) > 3 && this.state.originalMovies.indexOf(m) < 8) return m})
           console.log(movies)
           this.setState({movies})
        }

        moviesPageThree(){
          const movies = this.state.originalMovies.filter(m => {if (this.state.originalMovies.indexOf(m) > 7 && this.state.originalMovies.indexOf(m) < 12) return m})
          console.log(movies)
          this.setState({movies})
        }
      
        handleLike(movie){
          const movies = [...this.state.movies]
          const index = movies.indexOf(movie)
          movies[index] = {...movie}
          movies[index].Liked = !movies[index].Liked    
          this.setState({movies})
        }
      }
      
// The argument movie passed in the movies.map method cannot be the same as the element key or else it will throw an error
// To have the delete button register which movie is its parent element you can pass the movie object that is iterated
//To the arguement of the clickedDelete method 
export default Movies;