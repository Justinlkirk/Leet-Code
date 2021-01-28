/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let newArray = multiDArray(releaseTimes, keysPressed), longestKey = " ", previousMax = Number.NEGATIVE_INFINITY;
    
    for (let ele of newArray){
        if (ele[0] > previousMax) {
            longestKey = ele[1];
            previousMax = ele[0];
        }
        else if (ele[0] == previousMax && ele[1] > longestKey) longestKey = ele[1];
    }
    return longestKey;
};

var multiDArray = function(value1, value2){
    let twoDArray = [], actualTime = 0;
    
    for (i=0; i<=value1.length-1; i++){
        if (value1[i-1] == undefined) actualTime = value1[i];
        else actualTime = value1[i] - value1[i-1];
        twoDArray.push([actualTime, value2[i]])
    };
    return twoDArray;
};