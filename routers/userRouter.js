
const express = require('express');
const app = express();
const UserDetails = require('../models/user_model')


app.post('/user/insert',(req,res)=>{
    
    const user11 = req.body.username;
    const email11 = req.body.email;
    const phone11 = req.body.phone;
    const password11 = req.body.password;

    const data = new UserDetails({
        userName:user11,
        email:email11,
        phone:phone11,
        password:password11
    });
        data.save();
})