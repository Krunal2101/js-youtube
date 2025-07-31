// if

const isuserloggedIn = true
const temp = 38
const score = 200

// if(score > 100){
//    let power = "fly"
//    console.log(`user power: ${power}`)
// } 

// short hand notation

//const blance = 1000

// if (blance>500) console.log("test"); // do not write this type of code

//if(blance > 500){
//    console.log("less than 500");
//} else if(blance > 800){
//    console.log("less than 800");
//}else if (blance> 1000) {
//    console.log("less than 1000");
//}else{
//    console.log("les than 1200");
//}

const userLoggedIn = true
const debitcard = true
const userLoggedIngoogle = false
const userLoggedInEmail = true

if (userLoggedIn && debitcard) {
    console.log("allow to buy course");
}

if (userLoggedIngoogle || userLoggedInEmail) {
    console.log("user logged in");
}