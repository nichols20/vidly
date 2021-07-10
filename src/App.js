import './services/fakeMovieService'
import './App.css';
import NavBar from './services/navbar';
import Movies from './services/movies';
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './services/common/notfound';
import Customers from './services/customers';


function App() {
  return (
    <div>
      <NavBar />

      <div>
      <Switch>
        <Route path='/Customers' component={Customers}/>
        <Route path='/not-found' component={NotFound}/>
        <Route path='/Movies' component={Movies}/>
        <Route path='/' exact>
         <Redirect to='/movies'/>
        </Route>
        <Redirect to='/not-found'/>
      </Switch>
      </div>

    </div>
  );
}

/*created Route element with the path /movies which will display the movies component when the url equals the designated
path. I realized the NavBar will be seperate from the content created so I created a navbar component to keep the code
related together in the same place and clean. I then created A route for the exact path '/' and added a reirect to 
the movies route this is so Users that traverse to the home url will get redirected to the movies route. I then added 
a not-found route and redirect the redirect is incase a given url does not match any defined it will return the not-found
route which will render an h1 stating the page isn't found. */

export default App;
