import React, { useState } from 'react';

export default function Task({ name, time }) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="border p-4 rounded mb-2">
      <h3 className="font-bold">{name}</h3>
      <p>{time}</p>
      <p>Status: {completed ? 'Completed' : 'Pending'}</p>
      <button
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
        onClick={() => setCompleted(true)}
      >
        Complete
      </button>
    </div>
  );
}
