

const express = require('express');

const Blog = mongoose.model('Blog',{
    blogTitle:{
        type:String,
    },
    blogDescription:{
        type: String,
    },
    username:{
        type:String,
    },
    blogDate:{
        type:String,
    },
    blogCategory:{
        type:String,
    }
})