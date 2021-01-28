/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let total = 0, newArray = [];
    
    for (let ele of nums) {
        total += ele;
        newArray.push(total);
    }
    return newArray;
};

console.log(runningSum([1,2,3,4]));