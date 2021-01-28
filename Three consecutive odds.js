/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for (i=0; i < arr.length; i++){
        if (arr[i] % 2 == 1) {
            if (arr[i+1] % 2 == 1) {
                if (arr[i+2] % 2 == 1) {
                    return true;
                }
            }
        }
            
    }
    return false;
};

console.log(threeConsecutiveOdds([2,6,4,1]));
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]));