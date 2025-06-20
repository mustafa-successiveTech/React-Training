import { useState } from 'react';

export default function Button() {
  const [bgColor, setBgColor] = useState('');

  const buttons = ['Red', 'Green', 'Blue'];
    const colors = {
      Red: 'red',
      Green: 'green',
      Blue: 'blue',
    };
  

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px' }} >
      {buttons.map((btn, index) => (
        <button key={index} onClick={() => setBgColor(colors[btn])}>
          {btn}
        </button>
      ))}
    </div>
  );
}