export default function MainPage({ user, setUser }) {
    const logout = () => setUser(null);
  
    const deleteAccount = () => {
      localStorage.removeItem("user");
      setUser(null);
    };
  
    return (
      <div className="p-6">
        <h2>Welcome, {user.name}</h2>
        <button onClick={logout} className="mr-2 bg-yellow-500 px-4 py-1">Logout</button>
        <button onClick={deleteAccount} className="bg-red-500 px-4 py-1 text-white">Delete Account</button>
      </div>
    );
  }
  