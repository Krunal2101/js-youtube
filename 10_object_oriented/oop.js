// object literal
const user = {
    username: 'krunal',
    loggedIN: 8,
    singgIN: true,

    getuserdetial: function(){
    //    console.log("fetch user detail from database");
    //console.log(`user: ${this.username}`);
    console.log(this);
    }
}

//console.log(user.username);
//console.log(user.getuserdetial());

// constructor function keyword(new)

function User(username, loggedIN,singgIN){
    this.username = username;
    this.loggedIN = loggedIN;
    this.singgIN = singgIN;

    return this
}

const userOne = new User('krunal',21, true)
const usertwo = new User('chai', 12, false )

console.log(userOne);
