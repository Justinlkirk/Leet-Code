/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let mostWealth = 0;
    
    for (var customerAccounts of accounts){
      	let totalWealth = 0;
      
        for (var bankTotal of customerAccounts){
            totalWealth += bankTotal;
        }
        if (totalWealth > mostWealth) mostWealth = totalWealth;
    }
    return mostWealth;
};

console.log(maximumWealth([[1,2,3],[3,2,1]]));
console.log(maximumWealth([[1,5],[7,3],[3,5]]));
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));