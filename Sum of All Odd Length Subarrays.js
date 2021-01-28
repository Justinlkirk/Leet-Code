/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let total = 0;
    
    for (i=0; i<arr.length; i++){
        total += parseInt((((i+1)*(arr.length - i)) +1)/2) * arr[i];
    }
    return total;
};//Finds out how many times each number will appear if grouped in only odd subarrays then multiplies itself by that number and adds it to the total

console.log(sumOddLengthSubarrays([1,4,2,5,3]));
console.log(sumOddLengthSubarrays([1,2]));
console.log(sumOddLengthSubarrays([10,11,12]));
console.log(sumOddLengthSubarrays([6,9,14,5,3,8,7,12,13,1]));