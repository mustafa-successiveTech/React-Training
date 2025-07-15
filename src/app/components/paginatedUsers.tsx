'use client';
import { useEffect, useState } from 'react';

const ITEMS_PER_PAGE = 3;

export default function PaginatedUsers() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Failed to fetch data');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = users.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  return (
    <div>
      <h1>Paginated Users</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <>
          <ul>
            {paginatedUsers.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> — {user.email}
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '1rem' }}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              {"<"}
            </button>
            <span style={{ margin: '0 1rem' }}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              {">"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
