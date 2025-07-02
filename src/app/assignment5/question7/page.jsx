'use client';
import { useState } from 'react';
import axios from 'axios';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');
    setLoading(true);

    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: 1, 
      });

      setSuccessMsg(`Post created with ID: ${res.data.id}`);
      setTitle('');
      setBody('');
    } catch (err) {
      setErrorMsg('Failed to submit post: ' + err.message);
    }

    setLoading(false);
  };

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
      <h1>Create a Post</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>

        <div>
          <label>Content:</label><br />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            rows={5}
            style={{ width: '100%' }}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Post'}
        </button>
      </form>

      {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
    </div>
  );
}
