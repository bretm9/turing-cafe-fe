import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

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

  // it('the value should reflect in the input when data is put into the form', () => {
    
  // })
})