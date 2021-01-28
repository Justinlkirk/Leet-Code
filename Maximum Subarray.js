/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maximum = Math.log(0);
    
    for (i=0; i<nums.length; i++){
        let total = nums[i];
        
        for (j=i+1; j <= nums.length; j++) {
            if (total > maximum) maximum = total;
            total += nums[j];
        }
    }
    return maximum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([0]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([-100000]));