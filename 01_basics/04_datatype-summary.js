// primitive 
// 7 type : string, number, boolearn, null, nudefind, symbol, BigInt

const Score = 100
const ScoreValue = 21.21
const LoggedIn = true
const Temp = null
let userEmail;

const BidNum = 1518645548n

const Id = Symbol("21")
const newId = Symbol('21')

console.log(Id === newId);

// refernce (Non Primitive) 
// 3 type: Array, Object, Function

const heros = ["luffy", "Zoro", "Sanji"]

let Object = {
    name: "Krunal",
    age: 22,
}

const MyFunction = function() {
    console.log("Hello World");
    
}

// ********************* memorys  ************************ //

// stack(primitive) and heap(Non-primitive) 

let MyName = "Krunal"
let anothername = MyName
anothername = "Milan"

console.log(MyName);
console.log(anothername);

let userone = {
    Email : "krunal@gmail.com",
    Password : "Krunal@2101"
}

let userTwo = userone
userTwo.Email = "Milan@gmail.com"

console.log(userone.Email);
console.log(userTwo.Email);

