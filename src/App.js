// Component is just a part of the react object
import React from "react";
import {
  BrowserRouter as Router, // Browser Router assigned alias
  Route,
  Switch,
  Link
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";
/*

	Link

	- Created a link that wraps the logo so that anytime it is clicked it will send the user to the home/root

*/
const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
