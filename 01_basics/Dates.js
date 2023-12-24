// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.toTimeString());

let newDate = new Date()
console.log(newDate.getMonth);

newDate.toLocaleString('default',{
    timeZone:"GMT+5:30"
})