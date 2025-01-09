function balbla(array) {
    for (const obj of array) {
        for (const bla in obj) {
            console.log(`${bla}: ${obj[bla]}`);
        }
    }
}

const data = [
    { name: 'lasha', age: 23 },
    { name: 'giorgi', age: 16 }
];

blabla(data);
