import { useState } from 'react';

export default function Button() {
  const [bgColor, setBgColor] = useState('');

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px', margin: '10px' }} >
      {/* {buttons.map((btn, index) => (
        <button key={index} onClick={() => setBgColor(colors[btn])}>
          {btn}
        </button>
      ))} */}
      <input
        type="text"
        placeholder="Enter Color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />
    </div>
  );
}