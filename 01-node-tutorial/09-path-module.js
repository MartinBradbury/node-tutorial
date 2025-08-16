const path = require('path') //import the built in module path

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt') //Joints the path locations and logs it below in console.
console.log(filePath)

const base = path.basename(filePath) // gets the base name of the filepath above. Ie - the file.
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') //The full absolute path of the file
console.log(absolute)
