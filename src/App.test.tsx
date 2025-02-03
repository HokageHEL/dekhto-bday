import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders birthday greeting header', () => {
  render(<App />);
  const headerElement = screen.getByText('Влад, з днем народження!');
  expect(headerElement).toBeInTheDocument();
});

test('renders greeting button', () => {
  render(<App />);
  const buttonElement = screen.getByText('Привітання!');
  expect(buttonElement).toBeInTheDocument();
});

test('renders initial greeting text', () => {
  render(<App />);
  const textElement = screen.getByText('тут буде текст привітання');
  expect(textElement).toBeInTheDocument();
});
