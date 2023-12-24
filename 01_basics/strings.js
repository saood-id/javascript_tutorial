const name ="saood"
const repocount=11
//console.log(name+repocount);

// console.log(`hello my name is ${name} and my repo count is ${repocount}`);//this is new method of string interpolation

const gameName = new String('phantom-Ping-03')

// console.log(gameName[0]);
// console.log(gameName.__proto__)
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('6'));
// console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,7)
console.log(newString);

const anotherString = gameName.slice(-8, 9)
console.log(anotherString);

const newString1 ="  saood  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://google.com/gamil%20inbox"
url.replace('%20',"-")
console.log(url.replace('%20','-'));

console.log(url.includes('promotion'));//search in url

console.log(gameName.split('-'));