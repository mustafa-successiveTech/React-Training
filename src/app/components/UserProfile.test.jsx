import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile Component', () => {
  const user = {
    name: 'Mustafa',
    email: 'mustafa@example.com',
    phone: '1234567890',
  };

  it('should display the user\'s name', () => {
    render(<UserProfile {...user} />);
    expect(screen.getByTestId('name')).toHaveTextContent(`Name: ${user.name}`);
  });

  it('should display the user\'s email', () => {
    render(<UserProfile {...user} />);
    expect(screen.getByTestId('email')).toHaveTextContent(`Email: ${user.email}`);
  });

  it('should display the user\'s phone number', () => {
    render(<UserProfile {...user} />);
    expect(screen.getByTestId('phone')).toHaveTextContent(`Phone: ${user.phone}`);
  });
});
