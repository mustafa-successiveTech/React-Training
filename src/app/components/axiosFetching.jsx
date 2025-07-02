import axios from 'axios';

export const dynamic = 'force-dynamic'; 

async function fetchPosts() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
}

export default async function PostsPage() {
  let posts;

  try {
    posts = await fetchPosts();
  } catch (error) {
    return (
      <div>
        <h1>Posts</h1>
        <p style={{ color: 'red' }}>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Posts (SSR with Axios)</h1>
      <ul>
        {posts.slice(0, 10).map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
