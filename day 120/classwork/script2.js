function func(set1, set2) {
    let result = new Set();

    for (let i of set1) {
        if (!set2.has(i)) {
            result.add(i);
        }
    }

    for (let i of set2) {
        if (!set1.has(i)) {
            result.add(i);
        }
    }

    return result;
}