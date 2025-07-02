export const dynamic = 'force-dynamic'; 

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <div className="parent" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Posts (SSR)</h1>
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
