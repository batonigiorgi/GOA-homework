import { useEffect, useState } from 'react';

function UserFetcher() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <ul className="p-4">
      {users.map(u => (
        <li key={u.id} className="border p-2 mb-1">
          <strong>{u.name}</strong> — {u.email}
        </li>
      ))}
    </ul>
  );
}

export default UserFetcher;
