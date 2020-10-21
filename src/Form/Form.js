import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: 0
    }
  }

  updateValue = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitReservation = () => {
    const newReservation = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: +this.state.number
    }
    this.props.addNewReservation(newReservation)
  }
  
  render() {
    return (
      <section>
        <input name="name" placeholder="name" onChange={this.updateValue}></input>
        <input name="date" placeholder="date" onChange={this.updateValue}></input>
        <input name="time" placeholder="time" onChange={this.updateValue}></input>
        <input name="number" placeholder="number of guests" onChange={this.updateValue}></input>
        <button onClick={this.submitReservation}>Make Reservation</button>
      </section>
    )
  }
}

export default Form;