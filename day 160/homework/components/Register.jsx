export default function Register({ setUser }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      setUser({ name: username });
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-6">
        <h2>Register</h2>
        <input name="username" placeholder="Name" className="border p-2 mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
      </form>
    );
  }
  