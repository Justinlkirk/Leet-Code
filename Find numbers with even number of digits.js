/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let stringEle = "", count = 0;
    
    for (let ele of nums){
        stringEle = (ele.toString().length) % 2;
        if (stringEle == 0) count++;
        else continue;
    }
    return count;
};

console.log(findNumbers([12,345,2,6,7896]));
console.log(findNumbers([555,901,482,1771]));