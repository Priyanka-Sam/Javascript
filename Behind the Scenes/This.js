"use strict";
// function func1(birthyear) {
//   console.log(2021 - birthyear);
//   console.log(this);
// }

// console.log(this);
//Arrow Function doesn't get its own this keyword, it just uses a lexical keword i.e. parent scopes
// const func2 = (birthyear) => {
//   console.log(2021 - birthyear);
//   console.log(this);
// };

// func1(1990);
// func2(1999);

const jonas = {
  firstName: "Jonas",
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2017 - this.year);

    const isMillenial = function () {
      console.log("Is Millenial?");
      cl.log(this.year); //undefined, because inside a method
      cl;
    };
  },
  greet: () => console.log(`Hey ${this.firstName}!`), //global scope, uses this from global scope
};

jonas.greet();
