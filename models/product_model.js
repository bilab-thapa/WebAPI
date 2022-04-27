const { default: mongoose } = require("mongoose")


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