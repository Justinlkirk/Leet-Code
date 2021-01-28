/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let str1 = "", str2 = "";
    
    for (let ele of word1) str1 += ele;
    
    for (let ele of word2) str2 += ele;
    
    if (str1 === str2) return true;
    else return false;
};//Checks  two arrays to see if the strings they hold are equivalent