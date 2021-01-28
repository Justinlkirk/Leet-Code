/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let value = 0;
    let goal = [];

    for (i=0; i < nums.length; i++){
        for (j=i+1; j < nums.length; j++){
            value = nums[i] + nums[j];
            if (value == target) {
                goal.push (i);
                goal.push (j);
                return goal;
            }
        }
    }
    return "Target not met."
};

    

console.log (twoSum([2,7,11,15], 9))
console.log (twoSum([3,2,4], 6))
console.log (twoSum([3,3], 6))
