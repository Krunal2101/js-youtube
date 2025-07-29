//function twonumadd(num1,num2){

//    console.log(num1 + num2);
//}

function twonumadd(num1,num2){

    //let result = num1 + num2;
    //return result;
    return num1 + num2;

}

// twonumadd(3,4);
const result = twonumadd(3,4)
// console.log("result: ",result);

function loginusermessage (username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermessage("krunal"))
console.log(loginusermessage())