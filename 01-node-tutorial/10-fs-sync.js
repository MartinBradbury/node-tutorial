//File module sync - reads this line by line (Can cause issues if a line takes a long time to read. No other user can use till done.)

const { readFileSync, writeFileSync } = require('fs')     //Destructure readFileSync and writeFileSync from built in fs.
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8') // need to provide the path and the encoding for file.
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt', //if file exists it will overwrite, if not it will create file
  `Here is the result : ${first}, ${second}`, // can add what you wat to the file
  { flag: 'a' } // you need this if you want to append to the file and not overwrite it.
)


// Another example
writeFileSync(
  './content/result-sync2.txt',
  'Hello World',
  { flag: 'a' }
)