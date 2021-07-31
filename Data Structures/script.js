"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//destructuring arrays

// const arr = [2, 3, 4];
// const [x, y, z] = arr; //destructuring assignment

// console.log(x, y, z);
//original array is not disrupted

let [first, , second] = restaurant.categories;
// console.log(first, second);

//to switch normally
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

//to switch using destructuring

[first, second] = [second, first];
// console.log(first, second);

const [starter, mainCourse] = restaurant.order(2, 1);
// console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//***********************************************************************
//Destructuring objects

const {
  name: restaurantName,
  openingHours: hours,
  categories: categories,
} = restaurant;
// console.log(restaurantName, hours, categories);

//set defaults
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//mutating variables
let a = 255;
let b = 855;
const obj = { a: 23, b: 7, c: 90 };
//js expect code block after { } thats why we cannot assign but to make it Worker, wrap into ()
({ a, b } = obj);
// console.log(a, b);

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;

// console.log(open, close);
// console.log(o, c);

//*****************************************************************
//spread operator ...  -takes elements from array and doesn't create new variables, use it in places where we use values separated by comma
const arr = [7, 8, 9, 10];
// const newarr = [1, 2, ...arr];
// const newarrnormal = [1, 2, arr]; //entire arr is an element

// console.log(newarr);
// console.log(...newarr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// const ingredients = [
//   prompt("Ingredient 1 : "),
//   prompt("Ingredient 2 : "),
//   prompt("Ingredient 3 : "),
// ];

// console.log(ingredients);

// const orderpasta = function (ing1, ing2, ing3) {
//   console.log(`Here's your pasta with ${ing1},${ing2} and ${ing3}`);
// };

// orderpasta(...ingredients);

//*******************************************************************************************
//REST

//spread, right side of =
const newarr = [1, 2, ...arr];

//REST, left side pf = , collects the unused elements in the destructuring assignment
const [p, q, ...other] = newarr;
// console.log(p, q, other);

//REST for objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//REST with functions
const add = function (...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];
  console.log(sum);
};

// add(...arr);
// add(newarr);

//***************************************************************************
//for-of loop

// for (const item of restaurant.mainMenu) {
//   console.log(item);
//   // console.log(`${item[0] + 1} : ${item[1]}`);
// }

// console.log(...restaurant.mainMenu);

//***************************************************************************
//Enhanced object literals
//function methods
//

//***************************************************************************
//STRING MANIPULATION
const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(...plane);
// console.log(airline.length);
// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("Air"));

// console.log(airline.slice(airline.indexOf("Air"), 7));
// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(-8));
// console.log(airline.slice(0, -8));

const checkMiddleSeat = function (seat) {
  let s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got middle seat!");
};
// checkMiddleSeat("23A");
// checkMiddleSeat("28B");
// checkMiddleSeat("3E");

// console.log(airline.toLowerCase());
// console.log("jonas".toLowerCase());

const passenger = "jOnAs";
const plower = passenger.toLowerCase();
const correctpassenger = plower[0].toUpperCase() + plower.slice(1);
// console.log(correctpassenger);

const email = "hello@jonas.io";
const loginemail = "  Hello@honas.io  \n";

const loweremail = loginemail.toLowerCase();
const trimmedemail = loweremail.trim();
// console.log(trimmedemail);

const priceGB = "20789&";
const priceUS = priceGB.replace("&", "$");
// console.log(priceUS);

const plane = "Air230Neo";
// console.log(plane.includes("230"));
console.log(plane.startsWith("Air"));
console.log(plane.endsWith("Neo"));

console.log("hello.jonas.how.are.you".split("."));

const [firstname, lastname] = "Jonas Burke".split(" ");

const newName = ["Mr.", firstname, lastname.toUpperCase()].join(" ");
console.log(newName);

const msg = "Go to Gate 23";
console.log("Jonas".padStart(25, "*").padEnd(25, "*"));
//
