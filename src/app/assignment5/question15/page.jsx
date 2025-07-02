'use client';
import withLogger from '@/app/hoc/withLogger';
import { useState } from 'react';

function SampleComponent() {
  const [count, setCount] = useState(0);

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h2>Sample Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default withLogger(SampleComponent);
