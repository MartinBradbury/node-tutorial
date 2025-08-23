const express = require('express');
const path = require('path');
const app = express();


// setup static and middleware -> can dump all static files here and expess will deal with it
// public is common name for the static files in express
// You can also just add index.html to this too. 
app.use(express.static('./public'))


// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname,'./navbar-app/index.html'))
        // ADD TO STATIC ASSETS OR SSR

// })

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})



app.listen(5000, () => {
    console.log('Starting server on port 5000...')
})