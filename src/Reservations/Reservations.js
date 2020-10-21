import React from 'react';
import PropTypes from 'prop-types'

function Reservations(props) {
  const allReservationsToRender = props.allReservations.map(reservation => {
    return (
      <section>
        <h1>{reservation.name}</h1>
        <h3>{reservation.date}</h3>
        <h3>{reservation.time}</h3>
        <h3>Number of guests: {reservation.number}</h3>
      </section>
    );
  });
}

Reservations.PropTypes = {
  allReservations: PropTypes.array
}

export default Reservations;