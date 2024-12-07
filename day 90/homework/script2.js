function manualSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) { 
                let temp = array[i];  
                array[i] = array[j]; 
                array[j] = temp;      
            }
        }
    }
    return array;
}

let numbers = [5, 3, 8, 1, 2];
console.log(manualSort(numbers)); 
