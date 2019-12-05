import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home-pages';
import Default from './pages/Default-pages';
import Recipes from './pages/Recipes-pages';
import SingleRecipe from './pages/SingleRecipe-pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar-components'


class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {/* navbar */}
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/recipes/' exact component={Recipes} />
            <Route path='/recipes/:id' component={SingleRecipe} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    );
  }
}




export default App;
