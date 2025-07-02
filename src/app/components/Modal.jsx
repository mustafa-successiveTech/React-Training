'use client';
import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div onClick={onClose}>
        {children} 
        <div>
          <button>Close</button>  
        </div>
    </div>
  );
}
