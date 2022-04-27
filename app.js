const { json } = require('body-parser');
const express = require('express');
const req = require('express/lib/request');
const { default: mongoose } = require("mongoose")
const app = express();
app.use(express.json());


require('./db/database')

app.post('/test',(req,res)=>{
    res.send('Hello World')
})

app.listen(8080);