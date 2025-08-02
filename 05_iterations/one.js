// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
       // console.log("5 is the best number");
    }
   // console.log(element);
}

for (let i = 0; i < 10; i++) {
    // console.log(`outer loop is ${i}`);

    for (let j = 0; j < 10; j++) {
        //console.log(`inner loop is ${j} and outer loop is ${i}`); 
        //console.log(i + '*' + j + '=' + i*j);
    }
}

// work on array

let myarray = ["krunal" , "himay" , "milan"]
//console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    //console.log(element);
}

// break and continue

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log("5 is founded");
        break
    }
    console.log(index);
    
}