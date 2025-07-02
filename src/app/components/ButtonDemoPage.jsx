'use client';
import { useState } from 'react';
import ButtonReusable from '../components/ButtonReusable';

export default function ButtonDemoPage() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1>Reusable Button Demo</h1>

      <ButtonReusable type="primary" onClick={() => setMessage('Primary clicked!')}>
        Primary
      </ButtonReusable>

      <ButtonReusable type="secondary" onClick={() => setMessage('Secondary clicked!')} style={{ marginLeft: 10 }}>
        Secondary
      </ButtonReusable>

      <ButtonReusable type="danger" onClick={() => setMessage('Danger clicked!')} style={{ marginLeft: 10 }}>
        Danger
      </ButtonReusable>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
}
