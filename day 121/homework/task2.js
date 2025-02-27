function delay(message, callback) {
    setTimeout(() => {
        console.log(message);
        callback();
    }, 2000);
}

delay("flamingo", () => {});