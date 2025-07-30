
const user = {
    username : "krunal",
    price: 199,

    welcomemassage: function(){
    
        //console.log(`${this.username} , welcome to website`);
        // console.log(this);  give full current info of user   
        
    }
}

//user.welcomemassage()
//user.username = "himay"
//user.welcomemassage()

// console.log(this); give empty {}

// function chai(){
//    console.log(this);   
//}

//chai()

//++++++++++++++++++ Arrow ++++++++++++++++++//

//const chai = function(){
//    let username = "krunal"
//    console.log(this.username); // not working
//}
//chai()

//const chai = () => {
//    let username = "krunal"
//    console.log(this.username); // not working   
//}
//chai()

const chai = function(){
    let username = "krunal"
    //console.log(this); // empty {}   
}
chai()

// now real arrow 

// const addtwo = (num1 ,num2) => {
//   return num1 + num2
//}
// console.log(addtwo(3,4));

// uper and below are same 

//const addtwo = (num1 ,num2) => num1 + num2 //there are no need to write return

//const addtwo = (num1 ,num2) =>(num1 + num2) //in this method if you use this() than you dont need a write return word

const addtwo = (num1 ,num2) => ({username:"krunal"}) //in case you use object in arrow you must used a {}
