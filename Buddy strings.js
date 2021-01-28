/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    let tempA = A;
  
  	if (A.length !== B.length) return false;
    else if (A.length == 1 && B.length == 1 && A == B) return false;
    else if (A == "") return false;
  	else if (A == B) {
        for (j=0; j < A.length; j++){
            for (i=j +1; i < A.length; i++) {
      		    if (A[i] == A[j]) return true;
            }
        }
        return false;
    }
    else if (A == B) return false;
    else{
        for (j=0; j < A.length; j++){
            for (i=j +1; i < A.length; i++) {
      		    if (A[i] == A[j]) continue;
          
                tempA = replaceChar(tempA, A[i], j);
                tempA = replaceChar(tempA, A[j], i);

                if (tempA == B) return true;
                else tempA = A;
            }
        }
        return false;
    }
};

function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);
      
    let newString = firstPart + replaceChar + lastPart;
    return newString;
}

console.log(buddyStrings("ab", "ba"))
// true
console.log(buddyStrings("ab", "ab"))
// false
console.log(buddyStrings("aa", "aa"))
// true
console.log(buddyStrings("abab", "abab"))
// true
