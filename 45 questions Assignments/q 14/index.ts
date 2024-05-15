/*Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/


let guestList: string[]= [
    "Dada jan",
    "Baba jan",
    "Anwer Maqsood",
    "Dr abdul qadeer",
    "Fatima jinnah",
    "waseem akhtar"
];

//Loop for each, to print the message to each person

guestList.forEach((guestName) =>
{
    console.log(`Dear ${guestName}, you are invited for dinner today,Please join us`)
})