const useremail = []

if (useremail) {
    console.log("got the user email");
}else{
    console.log("don't have email");
}

// falsy value = false , 0 , -0 , "" , NaN , undefind , null , bigInt 0n and other are truthy value

// truthy value = "0" , " " , 'false' , [] , {} , function(){}

// how to check array

// if (useremail.length ===  0) {
//    console.log("array is Empty");
// }

//how to check object

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("obj is empty");   
}

// nullish coalescing operater (??) null , undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 21

console.log(val1);

// terniary operator

// condition ? true : false

const iceteaprice = 100

iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80")

