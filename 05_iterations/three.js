// for of used for array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const map = new Map()
map.set('IN', 'iNDIA')
map.set('UAE', 'United Arab Emirates')
map.set('Fr', 'France')

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);  
}


const myObject = {
    game1 : "NFS" ,
    game2 : "valorant"
}

// for (const [key, value] of myObject) {       // not working
//    console.log(key,':-',value);
//}