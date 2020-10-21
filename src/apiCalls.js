export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
}

export const postReservation = (reservationData) => {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservationData)
  }
  return fetch('http://localhost:3001/api/v1/reservations', init)
  .then(response => response.json())
}