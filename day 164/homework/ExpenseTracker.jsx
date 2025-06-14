import { useState } from 'react';

function ExpenseTracker() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleAdd = () => {
    if (!title || !amount || !date) return;
    setExpenses([...expenses, { title, amount, date }]);
    setTitle(''); setAmount(''); setDate('');
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-3">
      <input className="border p-2 w-full" type="text" placeholder="დასახელება" value={title} onChange={e => setTitle(e.target.value)} />
      <input className="border p-2 w-full" type="number" placeholder="თანხა" value={amount} onChange={e => setAmount(e.target.value)} />
      <input className="border p-2 w-full" type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleAdd}>დამატება</button>

      <div className="space-y-2">
        {expenses.map((exp, i) => (
          <div key={i} className="p-3 border rounded shadow">
            <h2 className="font-bold">{exp.title}</h2>
            <p>₾ {exp.amount}</p>
            <p>{exp.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseTracker;
