/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0, string = s;
    
    while (string[string.length - 1] == " ") {
        string = string.slice(0, - 1);
    };//Removes any spaces from the end
    
    for (i=string.length -1; i >= 0; i--){
        
        if (string[i] == " ") return count;
        
        count++;
    }
    return count;
};//Tells you the length of the last word in a string

console.log(lengthOfLastWord("a "));