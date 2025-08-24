const express = require('express');
const app = express();
const logger = require('./logger')

// req => middleware => res

//REMOVED THIS INTO MIDDLEWARE LOGGER.JS
// const logger = (req,res,next) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time)
//     next() //Must always terminate or pass on to next with middleware - next goes to the get function
// }


// This method uses the middleware in every method below
// Order matters, if placed below the method it will not work on above
//Typically all middleware placed at the top.
app.use(logger)

// Methods
app.get('/', (req,res) => {
    res.send('Home Page')
})

app.get('/about', (req,res) => {
    res.send('About Page')
})

app.get('/products', (req,res) => {
    res.send('Products Page')
})

app.get('/stuff', (req,res) => {
    res.send('Stuff Page')
})



app.listen(5000,()=>{
    console.log('server listening on port 5000.....')
})