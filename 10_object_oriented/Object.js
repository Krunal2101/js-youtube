function multi5(num){
    return num*5
}

multi5.power = 2

console.log(multi5(5));
console.log(multi5.power);
console.log(multi5.prototype);
 
function createuser(username, score){
    this.username = username;
    this.score =score
}

createuser.prototype.increment = function(){
    this.score++
}

createuser.prototype.printMe = function(){
    console.log(`price ${this.score}`);
    
}

const chai = new createuser("chai", 25)
const tea = new createuser("tea", 250)

chai.printMe()