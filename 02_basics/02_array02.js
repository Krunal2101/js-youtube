const marvel_heros = ["Thor", "ironman", "spiderman"]
const animy_heros = ["Luffy", "Zoro", "Sanji"]

// marvel_heros.push(animy_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//const all_heros = marvel_heros.concat(animy_heros)
// console.log(all_heros);

// easy and most use 
const all_new_heros = [...marvel_heros, ...animy_heros]
// console.log(all_new_heros);

const arry = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [8, 9]]]
const main_arry = arry.flat(Infinity)

console.log(main_arry);

console.log(Array.isArray("Krunal"));
console.log(Array.from("Krunal"));
console.log(Array.from({ name : "Krunal"})); // intersting

let score1 = 196
let score2 = 169
let score3 = 217

console.log(Array.of(score1, score2, score3));

