import React, { Component } from 'react';
import Header from '../components/Header/Header-component'
import {Link} from 'react-router-dom'

class Default extends Component {
  render() {
    return <Header title='404 page!!' styleClass={'default-hero'}>
      <h2 className="text-light text-uppercase">You are in the wrong place suckaaaa</h2>

      <Link to='/' className="text-uppercase btn btn-success btn-lg mt-3">
        return Home
      </Link>
    </Header>
      
    
  }
}

export default Default;