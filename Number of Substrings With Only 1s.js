/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let totalSubStrings = 0, placeOnTriangle = 1;
    
    for (let ele of s){
        if (ele == 0) placeOnTriangle = 1;
        else {
            totalSubStrings = ((totalSubStrings + placeOnTriangle) % (1e9 + 7));
            placeOnTriangle++;
        }
    }
    return totalSubStrings;
};//Uses Pascal's tringle to determine how many subarrays contain 1's