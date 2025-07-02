'use client';
import React from 'react';

const styles = {
  base: 'px-4 py-2 rounded text-white font-semibold',
  primary: 'bg-blue-600 hover:bg-blue-700',
  secondary: 'bg-gray-600 hover:bg-gray-700',
  danger: 'bg-red-600 hover:bg-red-700',
};

export default function ButtonReusable({ type = 'primary', onClick, children }) {
  const className = `${styles.base} ${styles[type] || styles.primary}`;

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
