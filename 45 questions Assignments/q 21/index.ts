/*They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.*/

let book:{
    title: string;
    author: string;
    yearpublished: number;
    language: string; 
} = {
    title:"Hamlet",
    author:"William Shakespeare",
    yearpublished:1603,
    language:"Early Modern English",
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearpublished} in
${book.language}`);