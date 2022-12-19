import React, { Component } from 'react'
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Create from '../components/Create';
import Edit from '../components/Edit';

class Head extends Component {
  render() {
    return (

      <Router>
        <div>

          <Navbar/>
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/create' element={ <Create/>} />
            <Route path='/edit:id' element={ <Edit/>} />
          </Routes>

        </div>
      </Router>

    )
  }
}

export default Head