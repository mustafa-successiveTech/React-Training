"use client"
import { useState } from "react";
import Question1 from "./Question1/page";
import Question2 from "./Question2/page";
import Question3 from "./Question3/page";
import Question4 from "./Question4/page";
import Question5 from "./Question5/page";
import Question6 from "./Question6/page";
import './assignment1.css';

export default function Assignment1() {
  const [active, setActive] = useState(null);

  const renderQuestion = () => {
    switch (active) {
      case 1: return <Question1 />
      case 2: return <Question2 />
      case 3: return <Question3 />
      case 4: return <Question4 />
      case 5: return <Question5 />
      case 6: return <Question6 />
      default : return <p>Select a question to view its content.</p>
    }
  };

  return (
    <div style={{ padding: '20px' }} className="parent">
      <h2>Assignment 1</h2>

      <div style={{ marginBottom: '20px' }}>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => setActive(num)}
            style={{
              marginRight: '10px',
              padding: '10px 15px',
              backgroundColor: active === num ? '#888' : '#ccc',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Question {num}
          </button>
        ))}
      </div>

      <div style={{ borderTop: '1px solid #ddd', paddingTop: '20px' }}>
        {renderQuestion()}
      </div>
    </div>
  );
}
