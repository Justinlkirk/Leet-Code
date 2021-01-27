/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let max = 1, sortedNums = nums.sort(function(a,b){return a-b});
    
    for (let ele of sortedNums){
        if (max < ele) return max;
        else if (max == ele) max++;
        else continue;
    }
    return max;
};
console.log(firstMissingPositive([1,2,0]));
console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([7,8,9,11,12]));
console.log(firstMissingPositive([1,2,3,4,5]));