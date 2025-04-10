// Arrays

const MyArray = [1, 2, 3, 4, 5]
const myHeros = ["Luffy", "Zoro"]

// console.log(MyArray[2]);
const myArr = new Array(0, 1, 2, 3, 4, 5)

// console.log(myArr[2]);

// Array Methods

// myArr.push(5)
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr);

// const NewArr = myArr.join()
// console.log(NewArr);

// slice, splice

console.log("A ", myArr);

const nym1 = myArr.slice(1, 3)

console.log(nym1);
console.log("B ", myArr);

const nym2 = myArr.splice(1, 3)
console.log("c ", myArr);
console.log(nym2);
