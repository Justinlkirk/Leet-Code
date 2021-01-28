/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matchesPlayed = 0, teamsLeft = n
    
    while (teamsLeft > 1){
        if (teamsLeft % 2 == 0) {
            matchesPlayed += teamsLeft / 2;
            teamsLeft /= 2;
        }
        else {
            matchesPlayed += (teamsLeft - 1) / 2;
            teamsLeft = (((teamsLeft - 1) / 2) + 1);
        }
    }
    
    return matchesPlayed
};

console.log(numberOfMatches(14));