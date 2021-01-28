/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let state = 0;
    let previous = Math.log(0);
    let twoBack = previous;
    
    for (let current of nums){
        if (current < previous) {
            state++;
            if (twoBack <= current) previous = current;
            else current = previous;
        }
        console.log(twoBack, previous, current, state)
        twoBack = previous;
        previous = current;
    }
    if (state <= 1) return true;
    else return false;
};

console.log(checkPossibility([4,2,3]));
console.log(checkPossibility([4,2,1]));
console.log(checkPossibility([3,4,2,3]));
console.log(checkPossibility([1,4,1,2]));