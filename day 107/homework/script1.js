// 1 შემოგდით n და n ზომის მასივი. დაბეჭდეთ მასივის ორი უდიდესი ელემენტის ჯამი.
function sumTwoLargestElements(n, arr) {
    arr.sort((a, b) => b - a);
    
    return arr[0] + arr[1];
}

let n = 5;
let arr1 = [18, 12, 40, 1, 19];
console.log(sumTwoLargestElements(n, arr)); 
// 2 შემოგდით n და n ზომის მასივი. თქვენი ამოცანაა იპოვოთ მასივში ყველაზე ბოლოს გამეორებული ელემენტი და დაბეჭდოთ იგი. თუ  ასეთი ელემენტი არ არსებობს დაბეჭდეთ რომ მასივში არცერთი ელემენტი არ მეორდება
//მაგ : 5, 1 3 4 1 3 12 
//პასუხია 3 (მასივში გამიმეორდა 1-იანი და 3-იანი თუმცა რადგან 3 უფრო გვიან გამეორდა ეგაა საძებნი ელემენტიც)
let arr = [5, 1, 3, 4, 1, 3, 12];

let lastElement = arr[arr.length - 1];

let lastElementIndex = arr.lastIndexOf(lastElement);

for (let i = 0; i < arr.length; i++) {
    if (i === lastElementIndex) {
        console.log(arr[i]);
    } else if (lastElementIndex === -1) {
        console.log('No element is repeated in the array');
        break;
    } else {
        continue;
    }
}
// 3 შემოდის n და n ზომის მასივი. თქვენი  ამოცანაა თითოეული ელემენტისთვის დაბეჭდოთ მის მარცხნივ მყოფ ელემენტებს შორის რამდენზე მეტია იგი.
let arr2 = [3, 2, 6, 5, 1];

let result = [];
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
            count++;
        }
    }
    result.push(count);
}

console.log(result);