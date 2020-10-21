import React, { Component } from 'react';
import { getReservations, postReservation } from '../apiCalls';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allReservations: []
    }
  }

  componentDidMount() {
    getReservations()
    .then(response => response.json())
    .then(data => this.setState({ allReservations: data }))
  }

  addNewReservation = async (newReservation) => {
    const recievedReservation = await postReservation(newReservation)
    this.setState({ allReservations: [... this.state.allReservations, recievedReservation] })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addNewReservation={this.addNewReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations allReservations={this.state.allReservations}/>          
        </div>
      </div>
    )
  }
}

export default App;
