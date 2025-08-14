import React from 'react';

type ButtonReusableProps = {
  type?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties; 
};

export default function ButtonReusable({
  type = 'primary',
  onClick,
  children,
  style,
}: ButtonReusableProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        ...(type === 'primary' && { backgroundColor: 'blue', color: 'white' }),
        ...(type === 'secondary' && { backgroundColor: 'gray', color: 'white' }),
        ...(type === 'danger' && { backgroundColor: 'red', color: 'white' }),
        ...style, 
      }}
    >
      {children}
    </button>
  );
}
