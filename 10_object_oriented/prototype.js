//let myName = "krunal   "
//let myChannel = "chai    "

// console.log(myName.truelength);

let Myhero = ["thor","spiderman"]
let hero = {
    thor:"hammer",
    spiderman:"sling",

    getspiderpower: function(){
        console.log(`spiderpower is ${this.spiderman}`);
    }
}

Object.prototype.Krunal = function(){
    console.log(`Krunal is in all object`);
}

Array.prototype.heyKrunal = function(){
    console.log(`Krunal say hello`);
    
}

// hero.Krunal()
//Myhero.Krunal()
//Myhero.heyKrunal()
// hero.heyKrunal()

// inheritance

const user = {
    name:"Chai",
    Email:"chai@Exmaple.com"
}

const teacher = {
    makevideo : true
}

const teachsupport = {
    isavilable : false
}

const TaSupport = {
    makeasigement: 'js assigement',
    fulltime: true,
    __proto__:teachsupport
}

teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(teachsupport,teacher)


const anotherusername = "chaiorcode    "

String.prototype.truelenght = function(){
    console.log(`${this}`);
    console.log(`true lenght is : ${this.trim().length}`);
}

anotherusername.truelenght()
'Krunal'.truelenght()
"chai".truelenght()
