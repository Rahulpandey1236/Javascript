
const mysm=Symbol("key1");



const jsuser={
    name:"Rahul",
    age:19,
    location:"CHHTATA",
    email:"pandeyrahul8218@gail.com",
    lastloggedin:["Monday","Tuesday"],
    "full name":"Rahul pandey",
    [mysm]:"value kaey1",

}
console.log(jsuser.email);
console.log(jsuser.age);
console.log(jsuser.location);
console.log(jsuser.lastloggedin);
console.log(jsuser["full name"]);

console.log(jsuser["age"]);
console.log(jsuser["email"]);
console.log(jsuser["location"]);
console.log(jsuser["lastloggedin"]);

console.log(jsuser[mysm]);
console.log(typeof [mysm]);





jsuser.email="rahul@344";
//Object.freeze(jsuser);
jsuser.email="hello233";
console.log(jsuser);



jsuser.greet = function(){
    console.log("hello");
}
jsuser.greet();

jsuser.greet2=function(){
    console.log(`hello js user ${this.name}`);
}
jsuser.greet2();