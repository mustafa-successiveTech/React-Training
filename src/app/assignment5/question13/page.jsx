'use client';
import Modal from '@/app/components/Modal';
import { useState } from 'react';

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <h3>
          13. Design and implement a reusable Modal component that allows customization of its content. Provide controls to open, close, and toggle the modal’s visibility. Demonstrate how to use this component to display different types of content within a Next.js application.
        </h3>
        <div>
            <h1>Modal Component Demo</h1>

            <button onClick={() => setIsOpen(true)}>
                Open Modal
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>Hello from Modal!</h2>
                <p>This is reusable content inside the modal.</p>
            </Modal>
        </div>
    </div>
  );
}
