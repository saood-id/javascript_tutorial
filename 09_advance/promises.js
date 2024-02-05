const promise1 = new Promise((resolve,reject)=>{
    // do asyn task
    // DB calls, cryptography,neetwork
    setTimeout(function(){
    // console.log('Async task is complete');
    resolve()
    },1000)
})

promise1.then(function(){
   // console.log("promise consumed");
})

new Promise((resolve,reject)=>{
    setTimeout(function(){
       // console.log("Async task 2");
        resolve()
    },2000)
}).then(function(){
    //console.log("Async 2 resolved");
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Saood",email:"saood@example.com"})
    },1000)
})

promiseThree.then(function(user){
    //console.log(user)
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"Saood",password:"trums"})
        }
        else{
            reject('ERROR something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    return user.username
})
.then((username)=>{
    //console.log(username);
})
.catch((error)=>{
    //console.log(error);
})
.finally(()=>console.log(("The promise is either resolved or rejected")))


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"JavaScript",password:"trums"})
        }
        else{
            reject('js something went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})