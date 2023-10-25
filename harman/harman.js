// const min = 1
// const max = 6
// console.log(Math.floor(Math.random()*(max -  min + 1)) + min);

let favouritemovie = ["KGF","KGF2","MASTANEY","MONEYHEIST"];
let movielist = ["SQUID GAME"]

// console.log(movielist);

console.log(favouritemovie.length);
let addmovie = favouritemovie.concat(movielist);

console.log(addmovie.splice(1,2));
console.log(addmovie);

// let removemovie = movielist.splice()