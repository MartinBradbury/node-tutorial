// Async Method - does things at once, not one after the other. Executes as a block.
//NOTE - Rather than using the call backs, we would use a promise. ALWAYS USE --> ASYNC AWAIT

const { readFile, writeFile } = require('fs') //Sync method, needs to provide a call back when we are done.

// My own logic - I call the readFile inside the write as its async and if outside, would read before write complete. 
readFile('./content/first.txt', 'utf8', (err, result) => { // THis is where we provide the second argument -> call back functions
  if (err) {
    console.log(err)
    return
  }
  // console.log(result)
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    // console.log(result)
    const second = result
    writeFile('./content/new.txt',
      `This is is combined file: ${first} and ${second}.`,
      { flag: 'a'},
      (err) => {
        if (err) {
          console.log(err)
          return
        }
        readFile('./content/new.txt', 'utf8', (err, result) => {
          if (err) {
            console.log(err)
            return
          }
          console.log(result)
        })
    }
   )
})
})
  

//   const first = result
//   readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second = result
//     writeFile(
//       './content/result-async.txt',
//       `Here is the result : ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         console.log('done with this task')
//       }
//     )
//   })
// })
// console.log('starting next task')


// My example
readFile('./content/result-sync2.txt', 'utf8', (result, err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
})