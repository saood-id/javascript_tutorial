//primitive 

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//javaScript is Statically Typed language
const Id=Symbol('123')
const anotherId=Symbol('123')
//console.log(Id==anotherId);

// Reference(Non primitive)

// Array, Objects, Functions

const myHeroes=["IronMan","Hulk","Captain","SpiderMan"];
let myobj={
    name:"saood",
    age:24,
}

const myFunction = function(){
    console.log("why so serious?");
}

// stack (Primitive), Heap (Non-Primitive)

let myYoutubeName="gullyCricket"

let anothername = myYoutubeName
anothername="BabyOver"
console.log(myYoutubeName);
console.log(anothername);


let userOne={
    email:" saoodi@gmail.com",
    upi:"crack@ybl"
}
let userTwo=userOne;
userTwo.email="user@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);