// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)


// Setting the names in the same file. If we want to set the names from a module
//else where in the project, this is where we use modules.
// const paul = 'paul'
// const peter = 'peter'

// const sayHi = (name) =>{
//     console.log(`hello there ${name}`)
// }

// sayHi('Martin')
// sayHi('paul')
// sayHi('peter')

const names = require('./modules/04-names2') //gets the export from 04-name and sets it as names (require is a global - used to fetch modules)
const sayHi = require('./modules/05-utils') //gets the sayHi finction from 05-utils and sets as sayHi
const data = require('./modules/06-alternative-flavor')
const numbers = require('./modules/05-utils2')


require('./modules/07-mind-grenade') // just runs the function in the file
sayHi('susan') //uses the function and name in the string
sayHi(names.martin) // uses the function and uses 
sayHi(names.peter)
sayHi(names.paul)


console.log(names) // This will give the object with the data in it
console.log(data)
console.log(numbers[3]) // => number 4 as 0 based indexing in the list.
