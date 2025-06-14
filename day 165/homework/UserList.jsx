import { useState } from 'react';

const users = [
  { name: "Nino", isFav: true },
  { name: "Luka", isFav: false },
  { name: "Ana", isFav: true },
  { name: "Gio", isFav: false }
];

function UserList() {
  const [query, setQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [onlyFav, setOnlyFav] = useState(false);

  const filtered = users
    .filter(u => (onlyFav ? u.isFav : true))
    .filter(u => u.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

  return (
    <div className="p-4 space-y-3">
      <input className="border p-2 w-full" placeholder="ძიება..." onChange={e => setQuery(e.target.value)} />
      <button onClick={() => setSortAsc(!sortAsc)} className="bg-blue-500 text-white px-4 py-1">სორტირება</button>
      <button onClick={() => setOnlyFav(!onlyFav)} className="bg-green-500 text-white px-4 py-1">მხოლოდ ფავორიტები</button>

      {filtered.map((u, i) => (
        <div key={i} className="border p-2 rounded shadow">{u.name}</div>
      ))}
    </div>
  );
}

export default UserList;
