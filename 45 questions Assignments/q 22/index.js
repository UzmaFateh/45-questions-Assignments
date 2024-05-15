"use strict";
/*Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.*/
let fruits = ["Apple", "Banana", "Mango", "Pear"];
console.log(fruits[4]);
//internaional error : Arrays are zero-indexed, so index 4 is out of  bounds
console.log(fruits[3]);
//fruits[3] = "Pear";
//correcting the error by accessing a valid index.
