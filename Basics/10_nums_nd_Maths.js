let score=400;

console.log(score);

let score2=new Number(100);
console.log(score2);

console.log(score2.toString().length);
console.log(score2.toFixed(2));


const otherno=123.5677;
console.log(otherno.toPrecision(5));


const hundred=100000000
console.log(hundred.toLocaleString());


//Maths

console.log(Math);
console.log(Math.round(9.78));
console.log(Math.min(3,4,5,6));
console.log(Math.max(9,6,5,5));



console.log(Math.random());
console.log(Math.random()*10+1);//give no btw 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);


//we need a no btw 10 and 20
let min=10;
let max=20;
console.log(Math.floor(Math.random()*(max-min + 1)) + min);