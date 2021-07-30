'use strict'

//only primitive values are immutable
//ways to write arrays
const years = new Array(1991, 1999, 2021)
const friends = ['Hulk', 'Steve', 'Tony']

console.log(friends)
console.log(friends[0])
console.log(friends.length)

//can change values even after being const
friends[0] = 'Banner'
console.log(friends)

//cannot change the entire array //illegal
// friends = ['Helin', 'Rowan']


//multiple data types
const firstName = 'James'
const james = [firstName, 'Brooke', 1991, 2021 - 1991, friends]

//*************************************************************************** */
//Array Methods

//adding elements
friends.push('Jay') //returns len of the new array
friends.unshift('John')

friends.pop()       //returns popped element
friends.shift()

console.log(friends)
console.log(friends.indexOf('Steve'))      //returns index of element, -1 if doesn't exist
console.log(friends.includes('Steve'))     //returns true if element exists otherwise false  


