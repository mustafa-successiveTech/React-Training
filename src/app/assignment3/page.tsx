"use client";
import { useState, ReactNode } from "react";
import Question1 from "./question1/page";
import Question2 from "./question2/page";
import Question3 from "./question3/page";
import Question4 from "./question4/page";
import Question5 from "./question5/page";
import Question6 from "./question6/page";

export default function Assignment3(){
  const [active, setActive] = useState<number | null>(null);

  const renderQuestion = () => {
    switch (active) {
      case 1:
        return <Question1 />;
      case 2:
        return <Question2 />;
      case 3:
        return <Question3 />;
      case 4:
        return <Question4 />;
      case 5:
        return <Question5 />;
      case 6:
        return <Question6 />;
      default:
        return <p>Select a question to view its content.</p>;
    }
  };

  return (
    <div style={{ padding: "20px" }} className="parent">
      <h2>Assignment 3</h2>

      <div style={{ marginBottom: "20px" }}>
        {[1, 2, 3, 4, 5, 6].map((num: number) => (
          <button
            key={num}
            onClick={() => setActive(num)}
            style={{
              marginRight: "10px",
              padding: "10px 15px",
              backgroundColor: active === num ? "#888" : "#ccc",
              border: "none",
              cursor: "pointer",
            }}
          >
            Question {num}
          </button>
        ))}
      </div>

      <div style={{ borderTop: "1px solid #ddd", paddingTop: "20px" }}>
        {renderQuestion()}
      </div>
    </div>
  );
}
