/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let count = 0, tempStudents = students, newFirstStudents = [], newLastStudents = [];
    
    while (true) {
        for (i=0; i < tempStudents.length + 1;i++) {
            if (tempStudents[i] == sandwiches[count]) {
                count++;
                
                if (i == 0){
                    tempStudents = tempStudents.slice(1,);
                    break;
                }
                else {
                    newFirstStudents = tempStudents.slice(i+1,);
                    newLastStudents = tempStudents.slice(0, i);
                    tempStudents = newFirstStudents.concat(newLastStudents);
                    break;
                }
            }
            else if (i == tempStudents.length) return tempStudents.length;
        }
        if (count == sandwiches.length) break;
    }
    return tempStudents.length;
};

console.log(countStudents([1,1,0,0], [0,1,0,1]));
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));
console.log(countStudents([0,0,0,1,0,1,1,1,1,0,1], [0,0,0,1,0,0,0,0,0,1,0]));