/*question24:More Conditional Tests: You don’t have to limit the number of tests
you create to 10. If you want to try more comparisons, write more tests. Have at least one
True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than,
 greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
var fruit = "banana";
//eqality with string
console.log("Testing equality with strings:");
console.log("banana" == "banana"); //true
// console.log( "Banana" == "banana");  //false
//inequality with strings
console.log('banana' != 'banana'); //false
//using the lower case function
console.log("Testing with lower case function");
console.log("Banana".toLowerCase() == "banana"); //true
//Numerical tests
console.log("Numerical test:");
console.log(10 > 5); //true
console.log(5 < 1); //false
//tests using "&&" and "||" operators
console.log("tests with " && " and " || " operators:");
console.log(true && false); //false
console.log(true || false); //true
//tests whether an item is in an array
console.log("tests whether an item is in an array:");
var cities = ["Karachi", "Lahore", "Islamabad"];
console.log("Is 'Karachi' in cities?");
console.log(cities.includes("Karachi")); //true
//tests whether an item is not in an array
console.log("tests whether an item is not in an array:");
var fruits = [
    "apple", "banana", "kiwi"
];
console.log("Is 'orange' not in fruits?");
console.log(!fruits.includes("orange")); //true
