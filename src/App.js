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

  let iterateMovies = ()=>{
    return movies.map(movie =>
     <tr style={tableRowStyles} key={movie}>
      <th style={{paddingLeft: '1rem'}}>{movie.title}</th>
      <th>{movie.genre.name}</th>
      <th>{movie.numberInStock}</th>
      <th>{movie.dailyRentalRate}</th>
      <th><button>Delete</button></th> 
     </tr>
    )
  }
  
  return (
    <main className = 'container'>
      <h1>Hello World</h1>
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
