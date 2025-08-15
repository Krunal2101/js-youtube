const promiesOne = new Promise(function(resolve,reject){
    // do an async task
    // cryptography, DB call's, network
    setTimeout(function(){
        console.log('async task is complated');
        resolve()
    },1000)
})

promiesOne.then(function(){
    console.log('promies consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)    
}).then(function(){
    console.log('async 2 resolve');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({usernaem: 'Krunal', email:'kp@example.com'})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'krunal', password:'123'})
        }else{
            reject('Error:somthing is wrong')
        }
    },1000)
})

promisefour.then((user) => {
    console.log(user);
    return user.username
})
.then((username)  => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log('the promise is resolve or reject'))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'javasvript', password:'123'})
        }else{
            reject('Error:js is wrong')
        }
    },1000)
})

async function consumepromiseFive(params) {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromiseFive()


//async function getAlluser(){
//    try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/users')
//        const data = await response.json()
//        console.log(data);
//    } catch (error) {
//        console.log("E:",error); 
//    }
//}
//getAlluser()

fetch("https://api.github.com/users/Krunal2101")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data); 
})
.catch((error)=>console.log(error)
)