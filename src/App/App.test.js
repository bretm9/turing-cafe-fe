import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('should be able to add a new reservation', async () => {
    userEvent.type(screen.getByPlaceholderText('name'), 'Bret')
    userEvent.type(screen.getByPlaceholderText('date'), '12/20')
    userEvent.type(screen.getByPlaceholderText('time'), '6:01')
    userEvent.type(screen.getByPlaceholderText('number of guests'), '123456789')
    userEvent.click(screen.getByText('Make Reservation'))

    const name = await waitFor(() => screen.getByText('Bret'))
    const date = await waitFor(() => screen.getByText('12/20'))
    const time = await waitFor(() => screen.getByText('6:01'))
    const number = await waitFor(() => screen.getByText('Number of guests: 123456789'))

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  });
});