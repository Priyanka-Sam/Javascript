// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
//     / (height * height)(mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height(Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI(the same
// method on both objects).Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI.Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights

const johnArray = {
    fullName: "John Smith",
    mass: 78,
    height: 1.69,
    calcBMI: function (mass, height) {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

const markArray = {
    fullName: "Mark Miller",
    mass: 92,
    height: 1.95,
    calcBMI: function (mass, height) {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

function higherBMI(johnArray, markArray) {
    if (johnArray.bmi > markArray.bmi) {
        console.log(`John's BMI (${johnArray.bmi}) is higher than Mark's (${markArray.bmi})!`)
    }
    else {
        console.log(`Mark's BMI (${markArray.bmi}) is higher than John's (${johnArray.bmi})!`)
    }
}

johnArray.calcBMI(johnArray.mass, johnArray.height)
markArray.calcBMI(markArray.mass, markArray.height)

higherBMI(johnArray, markArray)