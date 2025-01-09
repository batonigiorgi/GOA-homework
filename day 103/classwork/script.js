const items = { 1: 'mobile', 2: 'laptop' };
const array = Object.keys(items).map(key => `${key}: ${items[key]}`);
console.log(array);

