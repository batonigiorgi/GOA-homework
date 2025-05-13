export default function RandomBox({ color, number }) {
    return (
      <div
        className="w-24 h-24 flex items-center justify-center text-white font-bold rounded"
        style={{ backgroundColor: color }}
      >
        {number}
      </div>
    );
  }
  {[...Array(10)].map((_, i) => (
    <RandomBox
      key={i}
      number={Math.floor(Math.random() * 100)}
      color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
    />
  ))}
  