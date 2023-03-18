const express = require("express");
const Blog = require("../models/blog");
const blogRouter = express.Router();


blogRouter.post("/blog", async(req, res) => {
    const { title, content, author  } = req.body;

    let blog;
    try {
        blog = new Blog({
            title,
            content,
            author
        });
        await blog.save();
    } catch (error) {
        return res.status(500).json({ message:"Please Check Internet", error })
    }
    
    return res.status(201).json({ message:"Blog Post Successfully", blog })

});

blogRouter.get("/blog", async(req, res) => {
    
    let blog;
    try {
        blog = await Blog.find();
    } catch (error) {
        return res.status(500).json({ message:"Please Check Internet", error })
    };

    return res.status(201).json({ message:"Blog Get Successfully", blog })

})


blogRouter.get("/blog/:id", async(req, res) => {
    
    const id = req.params.id

    let blog;
    try {
        blog = await Blog.findById(id);
    } catch (error) {
        return res.status(500).json({ message:"Please Check Internet", error })
    };

    return res.status(201).json({ message:"Blog Get Successfully", blog })

});


blogRouter.delete("/blog/:id", async(req, res) => {
    
    const id = req.params.id

    let blog;
    try {
        blog = await Blog.findByIdAndRemove(id);
    } catch (error) {
        return res.status(500).json({ message:"Please Check Internet", error })
    };

    return res.status(201).json({ message:"Blog Delete Successfully", blog })

});

module.exports = blogRouter;
