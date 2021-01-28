/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let stringK = K.toString(), arrayK = [], reverseA = A.reverse(), newArray = [], currentNum = 0, reverseK = [];
    
    
    
    for (let ele of stringK){
        arrayK.push(Number(ele))
    }//Makes K into an array of numbers
    reverseK = arrayK.reverse();
    
    for (i = 0; i < A.length - 1; i++){
        if (reverseK[i] == undefined) {
            
        }
        
        currentNum = (reverseA[i] + reverseK[i]);
        
    }
    
};

console.log(addToArrayForm([1,2,0,0], 34));
//1234
console.log(addToArrayForm([2,7,4], 181));
//455
console.log(addToArrayForm([2,1,5], 806));
//1021
//console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1));
//10000000000
//console.log(addToArrayForm([7,0,5,8,4,7,0,9,8,7,7,8,5,3,5,8,5,5,8,9,7,9,7,7,4,8,7,1,7,0,6,4,4,9,1,8,8,1,3,0,3,9,6,4,4,5,5,3,8,1], 76));
//[7,0,5,8,4,7,0,9,8,7,7,8,5,3,5,8,5,5,8,9,7,9,7,7,4,8,7,1,7,0,6,4,4,9,1,8,8,1,3,0,3,9,6,4,4,5,5,4,5,7]