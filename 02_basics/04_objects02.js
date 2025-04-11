// singalton object
const tinderuser = new Object()
//Non-singalton both are same

const tinderuser1 = {}

tinderuser.id = "Manav123"
tinderuser.name = "Manav"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularuser ={
    Email: "one@two.com",
    Fullname: {
        userfullname: {
            firstname:"Manav",
            lastname: "Modi"
        }
    },
}
//console.log(regularuser.Fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = object.assign{obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

//most used 
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

// when the value are coming from database

const user = [
    {
        id : 1,
        Email : "k@gmail.com"
    },
    {
        id : 1,
        Email : "k@gmail.com"
    },
    {
        id : 1,
        Email : "k@gmail.com"
    },
    {
        id : 1,
        Email : "k@gmail.com"
    }
]

user[1].Email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("isLoggedIn"));