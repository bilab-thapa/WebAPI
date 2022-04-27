
const express = require('express');
const app = express();
const Blog = require('../models/blog_model')



app.post('/blog/add',(req,res)=>{
    const blogTitle = req.body.blogTitle;
    const blogDescription = req.body.blogDescription;
    const username = req.body.username;
    const blogDate = req.body.blogDate;
    const blogCategory = req.body.blogCategory;

    const data = new Blog({
        blogCategory:blogCategory,
        blogTitle:blogTitle,
        blogDescription:blogDescription,
        blogCategory:blogCategory,
        username:username,
        blogDate:blogDate
    });
    data.save()
    .then(()=>{
        res.json({msg:"Blog Added"})
    })
    .catch ((e)=>{
        res.json({msg:"Something is Wrong"})
    });
})


app.delete('/blog/delete/:id',(req,res)=>{
    const id = req.params.id;
    Blog.deleteOne({_id:id})
    .then(()=>{
        res.json({msg:"Successfully Deleted"})
    })
    .catch((e)=>{
        res.json({msg:"Something went wrong"})
    })
})


app.put('/blog/update',(req,res)=>{
    const id = req.body.id;
    const title = req.body.blogTitle;
    console.log(req.body)
    Blog.updateOne({_id:id},{blogTitle:title})
    .then(()=>{
        res.json({msg:"Changed Successfully"})
    })
    .catch((e)=>{
        req.json({msg:"Error"})
    })
})


app.get('/blog/my/:id',(req,res)=>{
    const id = req.params.id;
    Blog.find({_id : id})
    .then((result)=>{
        res.json({data:result})
    })
    .catch()
})

app.get('/blog/my/:us',(req,res)=>{
    const us = req.params.us;
    Blog.find({username:us})
    .then((result)=>{
        res.json({data:result})
    })
    .catch()
})
