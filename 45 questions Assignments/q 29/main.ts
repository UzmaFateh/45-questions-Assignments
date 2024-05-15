/*29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

const favorite_fruits:string[] = ["mangos", "pears", "bananas"];
if(favorite_fruits.includes("mangos"))
    {
        console.log("I really like mangos");

    }
if(favorite_fruits.includes("pears")){
    console.log("I really like pears");
}

if(favorite_fruits.includes("bananas")){
    console.log("I really like bananas");

}//fruites which are not included in my array

if(favorite_fruits.includes("appples")){
    console.log("I really like apples ");
}
if(favorite_fruits.includes("oranges")){
    console.log("I really like oranges");
}