//general syntax
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(rep)
// }

//looping over object values
const jonas = [
    "Jonas",
    "Brooke",
    'Teacher',
    25,
    ['John', "Jay", "James"],
    1995]

const types = []

for (let i = 0; i < jonas.length; i++) {
    // console.log(jonas[i], typeof jonas[i])

    //filling type array
    // types[i] = typeof jonas[i]
    types.push(typeof jonas[i])
}
// console.log(types)

//******************************************************* */
//continue 
// for (let i = 0; i < jonas.length; i++) {

//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i])
// }



//break
// for (let i = 0; i < jonas.length; i++) {

//     if (typeof jonas[i] === 'number') break;;
//     console.log(jonas[i])
// }


//******************************************************* */
//backward loop

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i])
}


//loop in loop
// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`---------------- Starting Exercise ${exercise}`)
//     for (let rep = 0; rep <= 5; rep++) {
//         console.log(`Repetition ${rep}`)
//     }
// }

//******************************************************* */
//while loop
let i = 1
while (i <= 5) {
    console.log(i++)
}

let dice = Math.trunc(Math.random() * 6) + 1
while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6) console.log('Loop is ending ....')
}