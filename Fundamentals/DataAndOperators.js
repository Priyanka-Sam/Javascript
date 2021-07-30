let js = 'amazing';
// if (js === 'amazing') alert("JS is fun!");

//outputing to console
console.log(52 + 560);

//popup on the webpage
// alert("Hey there!")


//Data Types 

let PI = 3.1415;            //constant
let firstName = "James";    //String
// let age = 21;               //Number (Decimals/Integers)
let isAdult = true;             //Boolean
let year;                  //Undefined

console.log(typeof firstName);
// console.log(typeof age);
console.log(typeof isAdult);
console.log(typeof null);     //object


//changing value of variable
firstName = "Betty";
console.log(firstName);


//let, const, var
let age = 21;
age = 25;
const birthyear = 1991;     //never changing
var a = 90;        //similar to let, don't use var
a = 80;

//not mandatory to you keywords
lastname = 'Brooke';


//operators
const currYear = 2021
const myAge = currYear - 1999;
const yourAge = currYear - 2005;

console.log(myAge, yourAge);
console.log(myAge * 2, myAge / 2, 2 ** 5);
console.log(firstName + ' ' + lastname);

//Assignment Operator
let x = myAge + yourAge;
x += 10;
x -= 20;
x++;
x--;
console.log(x);

console.log(myAge > yourAge);
isAdult = myAge >= 18;


//Template Literals
const string = `I'm ${firstName}, a ${myAge} year old person.`;
console.log(string);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple 
lines`);


//Ternary Operator

const age = 23

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink)