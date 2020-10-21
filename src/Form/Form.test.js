import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  beforeEach(() => {
    render(<Form />)
  })

  it('should render Form', () => {
    expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('time')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('number of guests')).toBeInTheDocument();
  })

  it('the value should reflect in the input when data is put into the form', () => {
    userEvent.type(screen.getByPlaceholderText('name'), 'Bret')
    userEvent.type(screen.getByPlaceholderText('date'), '12/20')
    userEvent.type(screen.getByPlaceholderText('time'), '6:00')
    userEvent.type(screen.getByPlaceholderText('number of guests'), '123456789')
    
    expect(screen.getByPlaceholderText('name').value).toEqual('Bret');
    expect(screen.getByPlaceholderText('date').value).toEqual('12/20');
    expect(screen.getByPlaceholderText('time').value).toEqual('6:00');
    expect(screen.getByPlaceholderText('number of guests').value).toEqual('123456789');
  })
})