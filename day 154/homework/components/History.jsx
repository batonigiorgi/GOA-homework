export default function History({ history }) {
    return (
      <div className="mt-4">
        <h2 className="text-lg font-bold">History</h2>
        {history.map((val, idx) => (
          <p key={idx}>{val}</p>
        ))}
      </div>
    );
  }
  