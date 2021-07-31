"use strict";

const firstname = "Jane";
// calcAge(1999);

function calcAge(birthyear) {
  const age = 2021 - birthyear;
  // console.log(firstname);

  function printAge() {
    const output = `You are ${age}, born in ${birthyear}.`;
    console.log(output);
  }
  printAge();
  return age;
}

//***************************************************************************************
//Objects and Primitives

const me = {
  name: "Priyanka",
  age: 22,
};

const friend = me;

friend.age = 27;

console.log("Friend", friend);
console.log("Me", me);

//objects, refrences get stored in heap
//primitives are stored in the call stack n ECs

let age = 31; //points to mem adr 0001
let oldage = age; ////points to mem adr 0001 as well
age = 35; //the value at mem adr 0001 cdoesn't change, stays the same, but a new mem adr 0002 is allocated with value 35
//oldage keeps pointing to mem adr 0001
console.log(age, oldage);
