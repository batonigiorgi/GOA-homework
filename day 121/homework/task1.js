function greet(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000);
}

greet("Giorgi");
