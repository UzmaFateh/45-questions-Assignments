/*Name Cases: Store a person’s name in a variable, and then print that person’s name in
lowercase, uppercase, and titlecase*/
var personName = "Uzma";
console.log(personName.toLowerCase()); // name in lower case
console.log(personName.toUpperCase()); // name in UPPER CASE
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()); //name in Titla Case
