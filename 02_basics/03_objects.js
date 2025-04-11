// singleton

Object.create;

// object literals

const sym = Symbol("key1")

const jsuser = {
    name: "Krunal",
    "full name": "Krunal patel",
    [sym] : "mykey1",
    age: 22,
    location: "Gujarat",
    Email:"krunal@google.com",
    isloggedIn: false,
}

// console.log(jsuser.name);
// console.log(jsuser["Email"]);
// console.log(jsuser[sym]);

jsuser.Email ="krunal@gmail.com"
// Object.freeze(jsuser)
jsuser.Email="Krunal@google.com"
// console.log(jsuser["Email"]);

jsuser.greeting = function(){
    console.log("hello js user");
}

jsuser.greetingtwo = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());