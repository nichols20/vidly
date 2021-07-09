import './services/fakeMovieService'
import './App.css';
import NavBar from './navbar';
import Movies from './services/movies';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar />

      <div>
      <Route path='/Movies' component={Movies}/>
      </div>

    </div>
  );
}

//created Route element with the path /movies which will display the movies component when the url equals the designated
//path. I realized the NavBar will be seperate from the content created so I created a navbar component to keep the code
// related together and clean. 
export default App;
