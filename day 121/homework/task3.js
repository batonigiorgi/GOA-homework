function square(numbers, callback) {
    setTimeout(() => {
        const squaredNumbers = numbers.map(num => num * num);
        callback(squaredNumbers);
    }, 2000);
}

square([1, 2, 3, 4], (result) => {
    console.log(result);
});
