import { render, screen, fireEvent } from '@testing-library/react';
import ModalDemo from './ModalDemo';

describe('Modal Component', () => {
  it('should display the modal when opened', () => {
    render(<ModalDemo />);
    fireEvent.click(screen.getByTestId('open-button'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('should close the modal when close button is clicked', () => {
    render(<ModalDemo />);
    fireEvent.click(screen.getByTestId('open-button'));
    fireEvent.click(screen.getByTestId('close-button'));
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
