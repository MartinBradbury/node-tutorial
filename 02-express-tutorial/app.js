const express = require('express');
const app = express();

const {products} = require('./data.js')



app.get('/',(req,res)=>{
    res.status(200).send('<h1>Home Page,</h1> <a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProduct = products.map(product => [product.name, product.price])
     
    res.json(newProduct)
})

// The productID is a placeholder, can be anything
app.get('/api/products/:productID',(req,res)=>{
    // console.log(req)
    // console.log(req.params)
    const {productID} = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID)
) 
if(!singleProduct){
    return res.status(404).send('Product does not exist')
}
    res.json(singleProduct)
})


app.listen(5000,()=>{
    console.log('server listening on port 5000.....')
})