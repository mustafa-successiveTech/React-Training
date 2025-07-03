import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './Login';
import React from 'react';

describe('LoginForm Component', () => {
  test('calls submit handler on form submit', () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: '123456' },
    });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      username: 'testuser',
      password: '123456',
    });
  });
});
