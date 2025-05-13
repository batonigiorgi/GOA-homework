import StudentCard from './StudentCard';

export default function StudentList({ students }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {students.map((student, index) => (
        <StudentCard key={index} {...student} />
      ))}
    </div>
  );
}
