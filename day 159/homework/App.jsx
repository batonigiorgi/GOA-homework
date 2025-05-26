import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") return setInput("");
    try {
      if (value === "=") {
        // eslint-disable-next-line no-eval
        setInput(eval(input).toString());
      } else {
        setInput((prev) => prev + value);
      }
    } catch {
      setInput("Error");
    }
  };

  const buttons = ["1","2","3","+", "4","5","6","-", "7","8","9","*", "0",".","%","C", "="];

  return (
    <div className="p-6 max-w-sm mx-auto text-center">
      <h1 className="text-xl font-bold mb-4">🧮 Calculator</h1>
      <input className="w-full p-2 border mb-4" value={input} readOnly />
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn}
            className="bg-gray-200 p-2 rounded"
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
