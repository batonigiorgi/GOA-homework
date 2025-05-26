import Register from "./components/Register";
import MainPage from "./components/MainPage";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  if (!user) return <Register setUser={setUser} />;

  return <MainPage user={user} setUser={setUser} />;
}

export default App;
