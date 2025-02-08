function sortCustom(array) {
    let min = Math.min(...array);
    let max = Math.max(...array);
    let result = [];

    for (let i = min; i <= max; i++) {
        if (array.includes(i)) {
            result.push(i);
        }
    }

    console.log(result);
}

sortCustom([45, 2, 78, 6, 3, 12, 99, 7, 5, 46, 4]);