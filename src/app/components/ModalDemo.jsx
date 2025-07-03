import React, { useState } from 'react';
import Modal from './Modal';

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button data-testid="open-button" onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Modal Content</p>
      </Modal>
    </div>
  );
}
