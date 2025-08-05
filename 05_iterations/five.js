const coding = ["java", "python", "cpp", "js", "ruby"]

// most used loop

// coding.forEach(function (items) {
//    console.log(items);
//})

coding.forEach((items) => {
   // console.log(items);
})

coding.forEach((items, index, arr)=>{
    //console.log(items,index,arr);
})

// if object used in arry [{},{},{}]

const mycoding = [{
    languagename : "javascript",
    languagefilename : "js"
},
{
    languagename : "java",
    languagefilename : "java"
},
{
    languagename : "python",
    languagefilename : "py"
}
]

mycoding.forEach((item) => {
    console.log(item.languagefilename);
})