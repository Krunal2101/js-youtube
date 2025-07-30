// Immediately Invoked function Expressions (IIFS)
// why we use IIFS becz remove a globel pollution from our function

(function chai(){                                 // this is name iife becz chai is function name
    console.log(`DB Connected`);
})();

//using arrow function 
((name) => {                                      // this is simple iife becz there are no name
    console.log(`DB Connected to ${name}`);
})("Krunal")