/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
    let totalChanges = 0;
    
    for (index=0; index <= target.length-1; index++){
        if (target[index-1] == undefined) totalChanges = target[index];
        else if (target[index-1] >= target[index]) continue;
        else if (target[index-1] < target[index]) totalChanges += (target[index]-target[index-1])
    }
    return totalChanges;
};//Tracks the minimum number of changes to turn a 0 array into the given array one iteration at a time

console.log(minNumberOperations([1, 2, 3, 2, 1]));
console.log(minNumberOperations([3,4,2,5,6]));
console.log(minNumberOperations([3,1,5,4,2]));