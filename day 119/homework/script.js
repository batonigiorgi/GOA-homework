function createStudentMap(students) {
    const studentMap = new Map();
    for (const student of students) {
        const [name, score] = student;
        studentMap.set(name, score);
    }
    return studentMap;
}

const students = [["Nata", 90], ["Gio", 85], ["Nika", 95]];
console.log(createStudentMap(students));
