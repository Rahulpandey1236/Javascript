const tinderuser=new Object();

tinderuser.id=101;
tinderuser.name="rahuk";
tinderuser.isloggedin=false;

console.log(tinderuser);



const username={
    email:"raul@123",
    username2:{
        userfullname:{
            firstname:"rahul",
            seconname:"pandey",
        }
        
    }
}

console.log(username.username2.userfullname.firstname);



//combining two objects

const obj1={1:"a",2:"b"}
const obj2={3:"a" , 4:"b"}

const obj3=Object.assign({},obj1,obj2);
console.log(obj3);


const obj6={1:"a",2:"b"}
const obj4={3:"a" , 4:"b"}
const obj5={...obj6,...obj4}
console.log(obj5);

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));