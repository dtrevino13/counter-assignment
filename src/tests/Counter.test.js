import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter';

// import necessary react testing library helpers here
// import the Counter component here

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const basicCounter = screen.getByTestId('count').textContent
  expect(basicCounter).toEqual('0')
});

test('clicking + increments the count', () => {
 render(<Counter />);
 let basicCounter = screen.getByTestId('count').textContent
 let increaseCount = screen.queryByRole('button', { name: '+' })
 userEvent.click(increaseCount)
 basicCounter = screen.getByTestId('count').textContent
 expect(basicCounter).toEqual('1')
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
 let basicCounter = screen.getByTestId('count').textContent
 let decreaseCount = screen.queryByRole('button', { name: '-' })
 userEvent.click(decreaseCount)
 basicCounter = screen.getByTestId('count').textContent
 expect(basicCounter).toEqual('-1')
});
