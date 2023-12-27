function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("O");
    console.log("O");
    console.log("D");
}

// sayMyName()


function addTwoNums(num1,num2){
      console.log(num1+num2);
      //return to save into variable
    //   return num1+num2
}

// addTwoNums(5,8)

function loginUserMessage(username="sam"){
    if(!username){
       console.log("Please Enter username");
       return;
    }
    return`${username} just logged in`;
}

// console.log(loginUserMessage("saood"))
// console.log(loginUserMessage())

function CalculateCartPrice(...num1){
    return num1

}
// console.log(CalculateCartPrice(200,300,550));

const user={
    username:"Saood",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username:"preeti",
    price:6000
});

const myNewArray=[34,67,21]

function returnSecondvalue(getArray){

    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));