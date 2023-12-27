let a=300

if(true){
    let a = 32
    const b = 20
}

// console.log(a);
// console.log(b);
function one(){
    const username = "Saood"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // two()
    // console.log(website);
}

// one()

//*********************** interesting *************


addOne(5)//it is allowed as function is not declared as variable
function addOne(num){
    return num+1
}
// addTwo()//this is not allowed as function is declared as variable
const addTwo = function(num){
    return num+2
}