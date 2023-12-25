// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["spriderMan","Wolverine"]
// console.log(myArr[1]);

const myArr2 = new Array(1, 2, 3, 4)

//Array methods

// myArr.push(6) add element at end
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //adds element at start

// myArr.shift()//delete ele  from start

// console.log(myArr.includes(9));//find element
// const newArr = myArr.join()//present array as string


// console.log(newArr);
// console.log(myArr);

//slice and spice

console.log("A",myArr);

const mna = myArr.slice(1,3)

console.log(mna);
console.log("B",myArr);

const mna2= myArr.splice(1,3)
console.log("C",myArr);
console.log(mna2);