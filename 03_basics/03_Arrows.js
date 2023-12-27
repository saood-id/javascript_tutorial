const user = {
    username:"Saood",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
    }
}

// user.welcomeMessage()

// function Sample(){
//     console.log(this.username);
// }
const Sample = ()=>{
    let username = "Saood"
    // console.log(this.username);
}
Sample()

// const addtwo = (num1,num2)=>{
//     return num1+num2
// }
// const addtwo = (num1,num2)=> (num1+num2)//implicit return
const addtwo = (num1,num2)=> ({username:"saood"})
console.log(addtwo(3,4));