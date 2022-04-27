
const mongoose = require('mongoose');

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

model.export

