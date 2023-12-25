// singleton
// Object.create()

//object literals
const musym=Symbol("key1")
const JsUser={
    name:"saood",
    "full name" :"Mohammed saood Ahmed",
    age:24,
    location :"greater noida",
    email:"saoodid@gmail.com",
    isloggedin:false
    [musym]="2874"//square braket is necesary for symbols otherwise key will be treated as string. 

}
// Object.freeze(JsUser)  //this does'nt allow changes in object after freezing.
//console.log(JsUser["email"])we can also access object key like this apart from '.' method.
JsUser.greetings=function(){
    console.log("!! Eid Mubarak !!")
}
console.log(JsUser.greetings());

JsUser.greetingsTwo=function(){
    console.log(`wish you happy new year from ${this["full name"]}`);
}
console.log(JsUser.greetingsTwo());