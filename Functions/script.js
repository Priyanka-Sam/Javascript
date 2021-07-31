"use strict";
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numofPass = 1,
//   price = 200 * numofPass
// ) {
//   //ES5
//   //numofPass = numofPass || 1

//   const booking = {
//     flightNum,
//     numofPass,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// // createBooking("LM123");
// // createBooking("LM123", 2, 800);
// // createBooking("LM123", 2);

// //************************************************************************************ */

// const flight = "LM123";
// const jonas = {
//   name: "Jonas",
//   passport: 12345678,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LM999";
//   passenger.name = "Mr." + passenger.name;

//   if (passenger.passport === 12345678) {
//     console.log("Checked In.");
//   } else {
//     console.log("Wrong Passport");
//   }
// };

// // checkIn(flight, jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// console.log(jonas);
// checkIn(flight, jonas);

// //**************************************************************************************************
// //Higher Order Functions

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...second] = str.split(" ");
//   return [first.toUpperCase(), ...second].join(" ");
// };

// const transformer = function (str, fn) {
//   console.log(`Original String : ${str}`);
//   console.log(`Transformed String : ${fn(str)}`);
//   console.log(`Transformed by:  ${fn.name}`);
// };

// transformer("Javascript is the best!", upperFirstWord);
// transformer("Javascript is the best!", oneWord);

// const high5 = function () {
//   console.log("Bye!");
// };

// document.body.addEventListener("click", high5);

// ["Jonas", "Martha", "Adam"].forEach(high5);

//**************************************************************************************************
//Function returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}! `);
  };
};

const greetHey = greet("Hey");
greetHey("Jonas");

//one go
greet("Hello")("Martha");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}! `);

//call and apply
const lufthansa = {
  airline: "Lufthansa",
  code: "LH",
  bookings: [],
  book(flightnum, name) {
    console.log(
      `${name} booked a swat on ${this.airline} flight ${this.code}${flightnum}`
    );
    this.bookings.push({ flight: `${this.code}${flightnum}`, name });
  },
};

lufthansa.book(230, "Jonas Burke");

const eurowings = {
  airline: "Euro Wings",
  code: "EW",
  bookings: [],
};

const book = lufthansa.book;

//Doesn't work
//book(23, "Sarah Denver");

book.call(eurowings, 23, "Sarah Denver");
// console.log(eurowings);

book.call(lufthansa, 423, "Mary Denver");
// console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines ",
  code: "SA",
  bookings: [],
};

const flightData = [981, "George Vesta"];
book.call(swiss, flightData);
// console.log(swiss);

//bind method
//attaches all time

const bookEW = book.bind(eurowings);
const bookSA = book.bind(swiss);
const bookLF = book.bind(lufthansa);

bookEW(959, "George Vesta");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Burke");
console.log(eurowings);

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(`No. of Planes : ${this.planes}`);
};
