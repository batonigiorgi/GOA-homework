export default function BooleanMap({ values }) {
    return (
      <div>
        {values.map((val, i) => (
          <span key={i}>{val ? '1' : '0'} </span>
        ))}
      </div>
    );
  }
  