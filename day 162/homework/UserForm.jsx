import { useState } from "react";

export default function UserForm() {
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const info = e.target.info.value;
    setCards([...cards, { id: Date.now(), name, info }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" className="border p-2 m-1" />
        <input name="info" placeholder="Info" className="border p-2 m-1" />
        <button className="bg-blue-500 text-white px-3 py-1">Submit</button>
      </form>

      <div className="grid grid-cols-2 gap-2 mt-4">
        {cards.map((card) => (
          <div key={card.id} className="border p-2">
            <h3>{card.name}</h3>
            <p>{card.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
