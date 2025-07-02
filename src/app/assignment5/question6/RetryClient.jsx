'use client';
import { useState } from 'react';
import axios from 'axios';

export default function RetryClient() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAgain = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
    } catch (err) {
      setError('Retry failed: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>
      <h2>Retry Fetch</h2>
      <button onClick={fetchAgain} disabled={loading}>
        {loading ? 'Loading...' : 'Retry'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
