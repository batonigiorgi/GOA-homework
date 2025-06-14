import { useState } from 'react';

function Register() {
  const [name, setName] = useState('');

  const handleRegister = () => {
    localStorage.setItem('user', name);
    alert('დარეგისტრირდი!');
  };

  return (
    <div className="p-4 space-y-3">
      <input className="border p-2" placeholder="სახელი" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleRegister} className="bg-blue-600 text-white p-2">რეგისტრაცია</button>
    </div>
  );
}

export default Register;
