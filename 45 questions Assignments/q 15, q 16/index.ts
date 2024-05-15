/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your
 program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of
 the new person you are inviting*/

 let guestList: string[] = [
    "Dada Jan",
    "Baba Jan",
    "Anwer Maqsood",
    "Dr Abdul Qadeer",
    "Fatima Jinnah",
    "Rashid Minhas"
];

//step:1. print the person's name who can't make it.

let geuestWhoCantMakeIt: string = "Dr Abdul Qadeer";
console.log(`${geuestWhoCantMakeIt} can't make it to dinner`)

//step:2.Replace the name of guest who can't make it.

let newGuest: string = "Aziz Bhatti";
let indexOfgeuestWhoCantMakeIt:number = guestList.indexOf(geuestWhoCantMakeIt);
// console.log(indexOfgeuestWhoCantMakeIt)

if (indexOfgeuestWhoCantMakeIt !== -1){
    guestList[indexOfgeuestWhoCantMakeIt] = newGuest
}
// console.log(guestList[3])

//step:3. print a new set of invitations.
console.log("New set of invitations:")
guestList.forEach((guest:string) =>
{
    console.log(`Dear ${guest}, you are invited for dinner.`)
}

)
  

/*Exercise #16
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

//Exercise #16 solution

//Step:1 informing people that you found a bigger dinner table.

for (let guest of guestList){
    console.log(`Hello ${guest}, We found a bigger dinner table`)
}

//step:2 .Add a new guest to the beginning of array.

let newGuestAtTheBeginning: string = "Ali Ahmed";
guestList.unshift(newGuestAtTheBeginning);

console.log(guestList);

//step:3. add one guest to the middle of array.

let newGuestInTheMiddleOfArray: string = "Addul Hadi";
let middleIndex: number = Math.floor(guestList.length/2);

guestList.splice(middleIndex, 0, newGuestInTheMiddleOfArray);
// console.log(guestList);

//step:4. use append()to add new guest to the end of your list.

let newGuestAtTheEnd: string = "Sulaiman";
guestList.push(newGuestAtTheEnd);

// console.log(guestList);

//step:5.Print a new set of invitation messages, one for each person in your list.


console.log("New set of invitation messages:");
for(let guest of guestList){
    console.log(`Dear ${guest}, you are invited to dinner`)
}



export{guestList};







