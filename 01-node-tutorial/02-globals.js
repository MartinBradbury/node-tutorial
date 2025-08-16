// GLOBALS  - NO WINDOW !!!!

//global variables can be accessed anywhere in my application.



//some usefil global variables
// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
  const num = 6
  newnum = num + 4
  if (newnum < 10){
    console.log('Smaller')
  }
  else{
    console.log('bigger')
  }
  console.log('hello world')
}, 1000)

setTimeout(() => {
  console.log('time out')
}, 1000)
