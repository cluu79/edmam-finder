import React, { Component } from 'react'
import Header from '../components/Header/Header-component';
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return <Header title="Edamame recipes">
      <Link to="recipes" className="text-uppercase btn btn-success btn-lg mt-3">
        Find Recipes
      </Link>
    </Header>
      
    
  }
}
