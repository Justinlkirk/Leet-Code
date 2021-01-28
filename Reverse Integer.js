var reverse = function(x) {
    let stringX = String(x);
    let flippedString = "";
  	let flippedInt = 0;
    
    for (i=stringX.length - 1; i >= 0; i--) {
      	flippedString += stringX[i];
    }
  
  	flippedInt = parseInt(flippedString);	
  
    if (flippedInt >= (Math.pow(2,31) - 1) || flippedInt <= (Math.pow(-2, 31))) return 0;
    else if (x < 0) flippedInt *= -1;
  
  	return flippedInt;
};

console.log(reverse(148264));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));