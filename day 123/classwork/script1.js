function rejectAfterOneSecond() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("reject error");
        }, 1000);
    });
}

rejectAfterOneSecond()
    .catch(console.error);
