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
// console.log(loginusermessage())


function calculatecartprice(...num1){
    return num1;
}

// console.log(calculatecartprice(100,300,800));

const user = {
    name:"Krunal",
    price: 199
}

function handelobject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
}

// handelobject(user);

//using arry for this method

const newarry = [200,400,500]

function returnsecondvalue(anyarry){
    return anyarry[2]
}

console.log(returnsecondvalue(newarry))