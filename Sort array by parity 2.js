/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let newArray = [];
    newArray.length = A.length;
    
    for (let ele of A){
        if ((ele % 2) == 0){
            for (i = 0; i <= newArray.length-1; i += 2){
                if (newArray[i] == undefined) {
                    newArray[i] = ele;
                    break;
                }
            }
        }
        else if ((ele % 2) == 1){
            for (i = 1; i <= newArray.length-1; i += 2){
                    if (newArray[i] == undefined) {
                    newArray[i] = ele;
                    break;
                }
            } 
        }
    }
    return newArray;
};//Fills the new array with value whos parity corresponds to the parity of the index