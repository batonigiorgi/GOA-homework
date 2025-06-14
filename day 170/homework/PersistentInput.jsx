import { useState, useEffect } from 'react';

function PersistentInput() {
  const [text, setText] = useState(localStorage.getItem('text') || '');

  useEffect(() => {
    localStorage.setItem('text', text);
  }, [text]);

  return (
    <input
      className="border p-2 w-full"
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}

export default PersistentInput;
