
const express = require('express');
const app = express();
const Pro = require('../models/product_model')


app.post('/shop/product',(req,res)=>{
    const pname = req.body.productName;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const description = req.body.description;

    const data = new Pro({
        productName:pname,
        price:price,
        quantity:quantity,
        description:description,

    });
    data.save();
})