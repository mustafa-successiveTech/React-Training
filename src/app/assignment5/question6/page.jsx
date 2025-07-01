import axios from 'axios';
import RetryClient from './RetryClient';

async function fetchPosts() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  } catch (error) {
    return null; 
  }
}

export default async function PostsPage() {
  const posts = await fetchPosts();

  if (!posts) {
    return (
      <div>
        <h1>Posts (SSR with Axios)</h1>
        <p style={{ color: 'red' }}>Failed to fetch posts on server.</p>
        <RetryClient />
      </div>
    );
  }

  return (
    <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
      <h1>Posts (SSR with Axios)</h1>
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
