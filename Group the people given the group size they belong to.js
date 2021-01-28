/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let newGroups = groupSizes;
    let newSubGroups = [];
    let outputGroups = [];
    let groupSize = 1;
    let count =0;
    
    while (groupSize <= Math.max(...newGroups)) { 
        if (newGroups.indexOf(groupSize) == -1) {
            groupSize++;
            continue;
        }
        
        newSubGroups.push (newGroups.indexOf(groupSize));
        newGroups[newGroups.indexOf(groupSize)] = 0;
        
        if (newSubGroups.length >= groupSize) {
            outputGroups[count] = newSubGroups;
            newSubGroups = [];
            count ++;
        }
    }
    return outputGroups;
};

console.log(groupThePeople([3,3,3,3,2,1,3]));