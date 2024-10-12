//--------1--------
function checkOddEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "odd";
    }
}
//------2---------
function sumList(lst) {
    if (lst.length === 0) {
        return "სია ცარიელია";
    } else {
        let sum = 0;
        for (let i = 0; i < lst.length; i++) {
            sum += lst[i];
        }
        return sum;
    }
}
//------3-----------
function multiplyAndFilter(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let multiplied = nums[i] * 3;
        if (multiplied > 20) {
            result.push(multiplied);
        }
    }
    return result;
}
//-----------4----------
function findMax(lst) {
    if (lst.length === 0) {
        return "სია ცარიელია";
    } else {
        let max = lst[0];
        for (let i = 1; i < lst.length; i++) {
            if (lst[i] > max) {
                max = lst[i];
            }
        }
        return max;
    }
}
//---------5-----------
function productGreaterThan100(a, b) {
    let product = a * b;
    if (product > 100) {
        return true;
    } else {
        return false;
    }
}