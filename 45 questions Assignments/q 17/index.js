//Question#17
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive
in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message
saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them
know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know
they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list
to make sure you actually have an empty list at the end of your program.*/
var guestList = [
    'Ali Ahmed',
    'Dada Jan',
    'Baba Jan',
    'Anwer Maqsood',
    'Aziz Bhatti',
    'Fatima Jinnah',
    'Rashid Minhas'
];
//message about inviting only two people.
console.log("I can invite only two people for dinner");
//step:2 remove guest from the list until only two names remain.
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, ", I can't invite you for dinner!"));
}
/*step:3  print a message to each of the two people still on your list, letting
them know they're atill invited.*/
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hello, ".concat(guest, ", you are still invited for dinner!"));
}
/*step:4 Remove the last two names from your list, so you have an empty list. Print your list
to make sure you actually have an empty list at the end of your program */
guestList.pop();
guestList.pop();
//print empty string
console.log("Guest list after dinner", guestList);
