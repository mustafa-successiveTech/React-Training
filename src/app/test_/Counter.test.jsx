import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '@/components/Counter';

describe('Counter Component', () => {
  it('should render initial count as 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0');
  });

  it('should increment the count on clicking Increment button', () => {
    render(<Counter />);
    const incrementBtn = screen.getByText('Increment');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 1');
  });

  it('should decrement the count on clicking Decrement button', () => {
    render(<Counter />);
    const decrementBtn = screen.getByText('Decrement');
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: -1');
  });
});
