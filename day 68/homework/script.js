function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}


function check(seq, elem) {
    return seq.includes(elem);
}


function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
}


function countPositivesSumNegatives(input) {
    if (input.length === 0) return [];
    const positives = input.filter(num => num > 0).length;
    const negatives = input.filter(num => num < 0).reduce((sum, num) => sum + num, 0);
    return [positives, negatives];
}


class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}
