const { json } = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/firstdb',{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const UserDetails = mongoose.model('User',{
    username:{
        type:String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    password:{
        type:String
    }
})


const Pro = mongoose.model('Products',{
    productName:{
        type:String,
    },
    price:{
        type:String
    },
    quantity:{
        type:String,
    },
    description:{
        type:String
    }

})


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


app.post('/test',(req,res)=>{
    res.send('Hello World')
})

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


app.listen(8080);