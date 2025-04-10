// dates

const date = new Date()
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());

let Mycreteddate = new Date(2002, 11, 21,21,0)
console.log(Mycreteddate.toLocaleString());

let Timestemp = Date.now()
// console.log(Timestemp);
// console.log(Mycreteddate.getTime());
// console.log(Math.floor(Date.now()/1000));

date.toLocaleString('defult', {
    weekday:"long"
})
console.log(date);

