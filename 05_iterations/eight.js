const Mynum = [1, 2, 3]

// const Total = Mynum.reduce(function(acc, currval){
//    console.log(`acc:${acc} and currvalue: ${currval}`);
//       return acc + currval
// },0)

const Total = Mynum.reduce((acc , currval) =>(acc+currval),0 )

// console.log(Total);

const Shoppingcart = [
    {
        itemname : "js cource",
        price : 999
    },
    {
        itemname : "py cource",
        price : 599
    },
    {
        itemname : "mobile dev cource",
        price :5999
    },
    {
        itemname : "data science cource",
        price : 9999
    }

]

const Totalbill = Shoppingcart.reduce((acc,item) => acc+ item.price,0)

console.log(Totalbill);
