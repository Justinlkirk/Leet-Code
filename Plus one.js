/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let newDigits = digits;
    
    for (i=digits.length-1; i>=0; i--){
        newDigits[i]++
        if (newDigits[i] < 10) return newDigits;
        else newDigits[i] = 0; 
    }
    newDigits.unshift(1);
    return newDigits;
};//Function that deels with integers one magnitude at a time. Good for dealing with large integers

console.log(plusOne([1,2,3]));

console.log(plusOne([1,2,9]));

console.log(plusOne([9,9,9]));