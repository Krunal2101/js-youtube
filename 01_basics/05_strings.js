let name = "Krunal"
let reponum = 21

// console.log(name + reponum); out dated

console.log(`My name is ${name} and my repo num is ${reponum}`);

const gamename = new String ('Krunal')

console.log(gamename[1]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(5));
console.log(gamename.indexOf('n'));

const newString = gamename.substring(0, 5)
console.log(newString);

const anotherString = gamename.slice(-5, 5)
console.log(anotherString);

const Stringone = "   Milan   "
console.log(Stringone);
console.log(Stringone.trim());

const url = "https://Krunal.com/Krunal%20patel"

console.log(url.replace('%20', '-'));
