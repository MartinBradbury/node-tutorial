// Built in module, Lets us set up a webserver.

const http = require('http')

// const server = http.createServer((req, res) => {
//   //   if (req.url === '/') {
//   //     res.end('Welcome to our home page')
//   //   }
//   //   if (req.url === '/about') {
//   //     res.end('Here is our short history')
//   //   }
//   //   res.end(`
//   //   <h1>Oops!</h1>
//   // <p>We can't seem to find the page you are looking for</p>
//   // <a href="/">back home</a>
//   //   `)
//   // ###################################
//   // ###################################
//   //
//   //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
//   // SWITCH TO IF, ELSE IF, ELSE (BELOW)
//   // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
//   if (req.url === '/') {
//     res.end('Welcome to our home page')
//   } else if (req.url === '/about') {
//     res.end('Here is our short history')
//   } else {
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
//   }
// })

// server.listen(5000)

//Create a server with the req (request) and res (response) and the port using server.listen
const server = http.createServer((req, res) => { 
  if(req.url === '/'){
    res.end('Welcome to my server homepage')
  }
  else if(req.url === '/about'){
    res.end('Here is about')
  }
  else {res.end(`
    <h1> OOPS!!!! </h1>
    <p>Page does not exist</p>
    <a href='/'>back to home</a>
    `)
  }
})

server.listen(8000)