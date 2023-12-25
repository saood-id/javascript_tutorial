const Marvel_heroes = ["loki","SpiderMan","IronMan"]
const dc_heroes = ["Flash","Batman","Superman"]

// Marvel_heroes.push(dc_heroes)//this will push array as an element
// const allHeroes=Marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const allHeroes =[...Marvel_heroes,...dc_heroes]
// console.log(allHeroes);

const another_array = [[1,2,3],6,4,[9,5,[7,8]]]

const real_another_array = another_array.flat(Infinity)
// console.log((real_another_array));

console.log(Array.isArray("Saood"))//check where given is arraay or not

console.log(Array.from("Saood"));//convert into arrray from given

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));