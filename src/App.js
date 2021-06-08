import './services/fakeMovieService'
import './App.css';
import { getMovies } from './services/fakeMovieService';


function App() {
  let styles = {
    fontSize: 30,
    width: '100%'
  }
  let tableRowStyles = {
    borderTop: '2px solid',
    borderBottom: '2px solid',
    width: '100%'
  }

  let movies = getMovies()

  let movieCount = 0

  let clickedDelete = movie =>{
    console.log(movie)
    console.log(open)
  }

  let iterateMovies = ()=>{
    // The argument movie passed in the movies.map method cannot be the same as the element key or else it will throw an error
    // To have the delete button register which movie is its parent element you can pass the movie object that is iterated
    //To the arguement of the clickedDelete method 
    return movies.map(movie =>
     <tr style={tableRowStyles} key={movie._id}>
      <th style={{paddingLeft: '1rem'}}>{movie.title}</th>
      <th>{movie.genre.name}</th>
      <th>{movie.numberInStock}</th>
      <th>{movie.dailyRentalRate}</th>
      <th><button onClick={() => clickedDelete(movie, movie._id)} className='btn btn-danger btn-sm'>Delete</button></th> 
     </tr>
    )
  }
  
  let countMovies = () => {
    return (movieCount === 0) ? 'There are no movies in the Database' : `There are ${movieCount} movies in the database`
  }
  return (
    <main className = 'container'>
      <h1>{countMovies()}</h1>
      <table style ={styles}>
          <thead>
            <tr style ={tableRowStyles}>
              <th style = {{paddingLeft: '1rem'}}>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {iterateMovies()}
          </tbody>

      </table>
    </main>
  );
}

export default App;
