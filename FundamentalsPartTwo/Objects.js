'use strict'

const jonasArray = ['Jonas',
    "Brooke",
    2021 - 1995,
    'Teacher',
    ['John', "Jay", "James"]]

//object (literal)
//order doesn't matter
//key value pairs
// const jonas = {
//     firstName: "Jonas",
//     lastName: "Brooke",
//     age: 2021 - 1995,
//     profession: 'Teacher',
//     friends: ['John', "Jay", "James"]
// }


// dot and bracket notation
// console.log(jonas)
// console.log(jonas.lastName)
// console.log(jonas["lastName"])        //can use expression

// const nameLabel = "Name"
// console.log(jonas["last" + nameLabel])

// const findout = prompt("Please enter your name", "Harry Potter")
// console.log(jonas[findout])


// jonas.location = 'Paris'
// jonas['birthyear'] = 1995
// console.log(jonas)


//************************************************************** */
//Object Methods

const jonas = {
    firstName: "Jonas",
    lastName: "Brooke",
    profession: 'Teacher',
    friends: ['John', "Jay", "James"],
    birthyear: 1995,
    // calcage: function (birthyear) {
    //     // console.log(this)
    //     return 2021 - birthyear
    // }

    calcage: function (birthyear) {
        // console.log(this)
        this.age = 2021 - this.birthyear
        return this.age
    }
    // calcage: function (birthyear) { return 2021 - this.birthyear }

}
console.log(jonas.calcage(1991))
// console.log(jonas['calcage'](1991))
console.log(jonas.age)







