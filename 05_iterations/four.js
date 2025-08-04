const myObject = {
    "js" : "javascript",
    "cpp" : "c++",
    "rb" : "ruby",
}

for (const key in myObject) {
    console.log(`${key} for the name ${myObject[key]}`);
}