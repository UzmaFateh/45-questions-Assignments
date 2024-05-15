"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your
 program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of
 the new person you are inviting*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
var guestList = [
    "Dada Jan",
    "Baba Jan",
    "Anwer Maqsood",
    "Dr Abdul Qadeer",
    "Fatima Jinnah",
    "Rashid Minhas"
];
exports.guestList = guestList;
//step:1. print the person's name who can't make it.
var geuestWhoCantMakeIt = "Dr Abdul Qadeer";
console.log("".concat(geuestWhoCantMakeIt, " can't make it to dinner"));
//step:2.Replace the name of guest who can't make it.
var newGuest = "Aziz Bhatti";
var indexOfgeuestWhoCantMakeIt = guestList.indexOf(geuestWhoCantMakeIt);
// console.log(indexOfgeuestWhoCantMakeIt)
if (indexOfgeuestWhoCantMakeIt !== -1) {
    guestList[indexOfgeuestWhoCantMakeIt] = newGuest;
}
// console.log(guestList[3])
//step:3. print a new set of invitations.
console.log("New set of invitations:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited for dinner."));
});
/*Exercise #16
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
//Exercise #16 solution
//Step:1 informing people that you found a bigger dinner table.
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hello ".concat(guest, ", We found a bigger dinner table"));
}
//step:2 .Add a new guest to the beginning of array.
var newGuestAtTheBeginning = "Ali Ahmed";
guestList.unshift(newGuestAtTheBeginning);
console.log(guestList);
//step:3. add one guest to the middle of array.
var newGuestInTheMiddleOfArray = "Addul Hadi";
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInTheMiddleOfArray);
// console.log(guestList);
//step:4. use append()to add new guest to the end of your list.
var newGuestAtTheEnd = "Sulaiman";
guestList.push(newGuestAtTheEnd);
// console.log(guestList);
//step:5.Print a new set of invitation messages, one for each person in your list.
console.log("New set of invitation messages:");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner"));
}
