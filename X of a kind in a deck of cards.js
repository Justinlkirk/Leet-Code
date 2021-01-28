/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let previousEle = undefined, tempDeck = [], count = 1, previousCounts = [];
    
    tempDeck = deck.sort();

    for (let ele of tempDeck){
        if (previousEle == undefined);
        else if (ele == previousEle) count++;
        else if (ele != previousEle) {
            previousCounts.push(count);
            count = 1;
        }
        previousEle = ele;
    }//Builds an array containing how many times each number shows up
  	previousCounts.push(count);
  
    tempDeck = previousCounts.sort();
  	previousCounts = [];

  	if (tempDeck[0] == 1 || tempDeck[0] == previousCounts[0]) return false;
    if (tempDeck[0] >= 2 && tempDeck[1] == undefined) return true;

    for (i = 2; i <= tempDeck[0]; i++){
        if (tempDeck[0] % i == 0){
            for (j=1; j < tempDeck.length; j++){
                if (j == tempDeck.length - 1 && tempDeck[j] % i == 0) return true;
                else if (tempDeck[j] % i == 0) continue;
                else if (tempDeck[j] % i != 0) break;
            }
        }
        else continue;
    }//Ensures each group has a common denominator of 2 or more
    return false;
};


console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]));
console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]));
console.log(hasGroupsSizeX([1,1]));
console.log(hasGroupsSizeX([0,0,0,0,0,0,0]));