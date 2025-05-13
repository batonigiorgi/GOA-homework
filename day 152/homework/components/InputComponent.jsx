export function InputComponent({ setText }) {
    return <input onChange={(e) => setText(e.target.value)} className="border p-2" />;
  }
  
export function TextComponent({ text }) {
    return <p>{text}</p>;
  }
  