const Person = function(firstname, year)
{
// console.log(this)
this.firstname = firstname;
this.year = year;

//dont do this
// int calcAge = function =>
}

const jonas = new Person('Jonas',1996)
//new object {} is created
//function is called this ={}
//linked to prototype
//automatically returns 

const jack = new Person('Jack',1990)
const jone = new Person('Jone',1993)

console.log(jonas,jack,jone)


Person.prototype.calcAge = function ()
{
    console.log(2021-this.year)
}
jack.calcAge()
jonas.calcAge()


Person.prototype.species = 'Homo Sapiens'

console.log(jonas.hasOwnProperty('year'))
console.log(jonas.hasOwnProperty('species'))