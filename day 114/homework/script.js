class Student {
    constructor() {
        this._score = 0;
    }

    set score(value) {
        if (value < 0 || value > 100) {
            throw new Error("score betwen 0 and 100");
        }
        this._score = value;
    }

    get grade() {
        if (this._score >= 90) return "A";
        if (this._score >= 80) return "B";
        if (this._score >= 70) return "C";
        if (this._score >= 60) return "D";
        return "F";
    }
}

const student = new Student();
student.score = 85;
console.log(student.grade);