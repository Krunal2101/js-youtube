let a = 300

if(true){
    let a = 30
    const b = 20
  //  console.log("inner: ", a)
}

// console.log(a)

// nested scopes

function one(){
    const username= "krunal"

    function two(){
        const website= "you-tube"
        //console.log(username)
    }

    //console.log(website) error

    two()
}

one()

// ==================== interesting ===================== // 


function addone(num1){
    return num1 + 1
}
addone(2)

// uper and below both are same but differnt methods

const addtwo = function(num1){
    return num1 + 2
}
addtwo(2)