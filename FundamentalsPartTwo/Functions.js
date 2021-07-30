//function is a value and can be stored in a variable

//defining a function
function func() {
    console.log("Mark")
}

function printValue(a, b) {
    console.log(a, b)
    const ans = `I have ${a} apples and ${b} oranges.`
    return ans
}

//invoking, running calling a function
func()

//store result invariable or directly output
const ans = printValue(7, 8)
console.log(ans, printValue(4, 7))

//********************************************************************************** */

//function declaration - function call can happen befor the declaration
function calcAge(birthyear) {
    return 2021 - birthyear
}

age1 = calcAge(1995)


//function expression - function call strictly after initialization
const calcAge2 = function (birthyear) {
    return 2021 - birthyear
}

const age2 = calcAge2(1997)

console.log(age1, age2)

//********************************************************************************** */

//Arrow Function

const calcAge3 = birthyear => 2037 - birthyear;
age3 = calcAge3(1991)
console.log(age3)


// const years = birthyear => {
//     const age = 2021 - birthyear
//     const retirement = 65 - age
//     return retirement
// }

const years = (birthyear, firstName) => {
    const age = 2021 - birthyear
    const retirement = 65 - age

    return `${firstName} has ${retirement} years left before retirement.`
}
console.log(years(1999, 'James'))


//********************************************************************************** */
//Function caling function
const smallerChunks = fruit => fruit * 4

function printValueChunks(apples, oranges) {
    // console.log(a, b)
    const applePieces = smallerChunks(apples)
    const orangePieces = smallerChunks(oranges)
    const ans = `I have ${applePieces} apples and ${orangePieces} oranges.`
    return ans
}

console.log(printValueChunks(4, 7))
