/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let tempSalary = salary, averageSalary = 0.00000, count = 0.00000, total = 0.00000, max = 0, min = 0;
    
    max = Math.max(...tempSalary);
    min = Math.min(...tempSalary);
    delete tempSalary[tempSalary.indexOf(max)]
    delete tempSalary[tempSalary.indexOf(min)]
    
    for (let ele of tempSalary){
      	if (ele == undefined) continue;
        total += ele;
        count++;
    }
    
    averageSalary = total/count;
    
    return averageSalary;
};

console.log(average([4000,3000,1000,2000]));
console.log(average([25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000]));