import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

describe('Form', () => {
  it('should render Form', () => {
    render(<Form />)

    expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('time')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('number of guests')).toBeInTheDocument();
  })
})