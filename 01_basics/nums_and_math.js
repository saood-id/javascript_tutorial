const score = 300

const balance = new Number(150)
// console.log(balance);

// console.log(balance.toFixed(2));

const someNumber =123.8966
// console.log(someNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.9));

console.log(Math.random());
console.log((Math.random()*10)+1);
/* Math.random always give value starting from 0 
we have to to  below to set the range on random number*/
const min =9
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))