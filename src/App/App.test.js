import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('should be able to add a new reservation', () => {
    userEvent.type(screen.getByPlaceholderText('name'), 'Bret')
    userEvent.type(screen.getByPlaceholderText('date'), '12/20')
    userEvent.type(screen.getByPlaceholderText('time'), '6:01')
    userEvent.type(screen.getByPlaceholderText('number of guests'), '123456789')
    userEvent.click(screen.getByText('Make Reservation'))

    expect(screen.getByText('Bret')).toBeInTheDocument();
    expect(screen.getByText('12/20')).toBeInTheDocument();
    expect(screen.getByText('6:01')).toBeInTheDocument();
    expect(screen.getByText('Number of guests: 123456789')).toBeInTheDocument();
  });
});