function func(sets) {
    let newS = new Set()
    for (let i of sets) {
        for (let value of i) {
            newS.add(value);
        }
    }
    return newS;
}

console.log(func([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]));