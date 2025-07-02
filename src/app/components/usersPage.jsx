export const dynamic = 'force-dynamic'; 

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store', 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  return res.json();
}

export default async function UsersPage() {
  let users;

  try {
    users = await fetchUsers();
  } catch (error) {
    return (
      <div>
        <h1>Users List</h1>
        <p style={{ color: 'red' }}>Error: {error.message}</p>
        <button onClick={fetchUsers()}>Retry...</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Users List (SSR)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
