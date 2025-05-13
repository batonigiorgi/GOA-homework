export default function StudentCard({ name, age, image }) {
    return (
      <div className="border p-4 rounded text-center">
        <img src={image} alt={name} className="w-20 h-20 rounded-full mx-auto mb-2" />
        <h3 className="font-bold">{name}</h3>
        <p>Age: {age}</p>
      </div>
    );
  }
  