"use client"
import { useState } from "react"
import Question1 from "./question1/page";
import Question2 from "./question2/page";
import Question3 from "./question3/page";
import Question4 from "./question4/page";
import Question5 from "./question5/page";
import Question6 from "./question6/page";
import Question7 from "./question7/page";
import Question8 from "./question8/page";
import Question9 from "./question9/page";
import Question10 from "./question10/page";
import Question11 from "./question11/page";
import Question12 from "./question12/page";
import Question13 from "./question13/page";
import Question14 from "./question14/page";

export default function Assignment4() {
  const [active, setActive] = useState(null);
  
    const renderQuestion = () => {
      switch (active) {
        case 1: return <Question1 />
        case 2: return <Question2 />
        case 3: return <Question3 />
        case 4: return <Question4 />
        case 5: return <Question5 />
        case 6: return <Question6 />
        case 7: return <Question7 />
        case 8: return <Question8 />
        case 9: return <Question9 />
        case 10: return <Question10 />
        case 11: return <Question11 />
        case 12: return <Question12 />
        case 13: return <Question13 />
        case 14: return <Question14 />
        
        default : return <p>Select a question to view its content.</p>
      }
    };


  return (
      <div style={{padding:"20px"}} className="parent">
          <h2>Assignment-4</h2>

          <div style={{ marginBottom: '20px' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
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
  )
}