import React, { Component } from 'react';
import { getReservations } from '../apiCalls';
import Reservations from '../Reservations/Reservations';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allReservations: []
    }
  }

  componentDidMount() {
    this.setState({ allReservations: getReservations() })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations allReservations={this.state.allReservations}/>          
        </div>
      </div>
    )
  }
}

export default App;
