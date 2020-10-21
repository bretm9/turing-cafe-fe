import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reservations from './Reservations';

describe('Reservations', () => {
  const reservationData = [
    {
      "id": 1,
      "name": "Bret",
      "date": "12/20",
      "time": "6:01",
      "number": 12345
      },
      {
      "id": 2,
      "name": "Noelle",
      "date": "4/2",
      "time": "1:00",
      "number": 6
      },
  ]

  beforeEach(() => {
    render(<Reservations allReservations={reservationData}/>)
  })

  it('should render a Reservation', () => {
    expect(screen.getByText('Bret')).toBeInTheDocument();
    expect(screen.getByText('12/20')).toBeInTheDocument();
    expect(screen.getByText('6:01')).toBeInTheDocument();
    expect(screen.getByText('Number of guests: 12345')).toBeInTheDocument();
  })
})