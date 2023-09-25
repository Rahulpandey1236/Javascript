//Dataypes
//1.primitive { String,Number,null,undefined,Bigint,Symbols,Boolean  }
const num=101;
const scorevalue=101.5;
const isloggedin=true;
const outsidetemp=null;
let useremail;


const id=Symbol('123abc');
const anotherid=Symbol('123abc');

console.log(id===anotherid);//flase

const bifnum=456789876n;


//2 .non-primitive ==> {Array , objects,Functions}
const lapto=["hp","dell","lenovo"];

//objects

let myobj={
    name:"rahul",
    age:22,
}

const myfunction=function(){
    console.log("hello");
}

let a=4;
let b=a++;
console.log(a);
console.log(a);

let c=6;
let d=++c;
console.log(c);
console.log(d);


//stack(primitive)   heap(non-primitive)

let myyoutube="hitesh123";
let anotheryoutube=myyoutube;
anotheryoutube="chai or code";
console.log(myyoutube);

console.log(anotheryoutube);//here copy of object will pass


let userone={
    email:"rahul123",
    uprid:"123@ybl",
}
let usertwo=userone;
usertwo.email="ram123",

console.log(userone.email);

console.log(usertwo.email);