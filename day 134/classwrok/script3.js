function toObj(matrix) {
    let obj = {};

    for (let i = 0; i < matrix.length; i++) {
        let key = matrix[i][0];
        let value = matrix[i][1]; 
        obj[key] = value;
    }

    return obj;
}

console.log(toObj([["name", "giorgi"]]));