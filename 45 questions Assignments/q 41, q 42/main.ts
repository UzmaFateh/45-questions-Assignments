/* 41. Magicians: Make a array of magician’s names. Pass the array to a 
function called show_magicians(), which prints the name of each magician in the array.*/

let magicians : string[] = ["Ana", "Bella", "Jhon", "Lara"];
function show_magicians ( Magicians: string[]){
    magicians.forEach(magician =>{
    console.log(magicians);
});
}
show_magicians(magicians);

/*42. Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the 
phrase the Great to each magician’s name. Call show_magicians() to see that the list has 
actually been modified.*/


function make_great(magicians: string[]){
    for (let i = 0; i < magicians.length ; i++){
        magicians[i] = magicians[i] + " The Great";
    }
}
make_great(magicians); // modifies the orriginal array

show_magicians(magicians); //shows modified name

/*43.Unchanged Magicians: Start with your work from Exercise 40. Call the function 
make_great() with a copy of the array of magicians’ names. Because the original array 
will be unchanged, return the new array and store it in a separate array. Call show_magicians() 
with each array to show that you have one array of the original names and one array with the Great 
added to each magician’s name.*/



// function make_great(magicians: string[]): string[] {
//     let greatMagicians = [];
//     magicians.forEach(magician => {
//         greatMagicians.push(`${magician} the Great`);
//     });
//     return greatMagicians;
// }

// let greatMagicians = make_great(magicians.slice()); //creats a new modified array
// console.log("Original magicians:");
// show_magicians(magicians); // shows original names

// console.log("Great magicians:");
// show_magicians(greatMagicians); // shows modified names