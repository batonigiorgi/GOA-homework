import React, { useState } from 'react';

export default function Counter({ onChange }) {
  const [count, setCount] = useState(0);

  const handleChange = (newVal) => {
    setCount(newVal);
    onChange(newVal);
  };

  return (
    <div className="text-center">
      <h1 className={`text-4xl mb-4 ${count > 0 ? 'text-green-500' : count < 0 ? 'text-red-500' : ''}`}>
        {count}
      </h1>
      <div className="flex justify-center gap-4">
        <button onClick={() => handleChange(count + 1)} className="btn">Increment</button>
        <button onClick={() => handleChange(0)} className="btn">Reset</button>
        <button onClick={() => handleChange(count - 1)} className="btn">Decrement</button>
      </div>
    </div>
  );
}
