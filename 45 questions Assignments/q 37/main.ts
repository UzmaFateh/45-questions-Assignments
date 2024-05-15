/*37.Large Shirts: Modify the make_shirt() function so that shirts are large 
by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt
with the default message, and a shirt of any size with a different message.*/

function make_shirt(size: string = "large", message:string = "I love TypeScript"){
    console.log(`making a ${size} size t-shirt with the message "${message}" printed on it.`);

}

make_shirt() // default large size and message

make_shirt("medium") // defalut message and  custom medium size

make_shirt("small","I love coding"); // custom message and small size