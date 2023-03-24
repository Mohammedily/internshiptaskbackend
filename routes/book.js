const express = require("express");
const Book = require("../models/book");
const bookRouter = express.Router();


bookRouter.post("/books", async(req, res) => {
    const { title,  author, description, publishedId } = req.body;

    let book;

    if(title ||
        author||
        description ||
        publishedId){
            return res.status(409).json({ message:"Please Enter All Fields" })
        }

    try {
        book = new Book({
            title,
            author,
            description,
            publishedDate: Date.now(),
            publishedId: publishedId
        });
        await book.save();
    } catch (error) {
        return res.status(500).json({ message:"Please Check Internet", error })
    }
    
    return res.status(201).json({ message:"Book Post Successfully", book })

});

bookRouter.get("/books", async(req, res) => {
    
    let book;
    try {
        book = await Book.find();
    } catch (error) {
        return res.status(500).json({ message:"Please Check Internet", error })
    };

    return res.status(201).json({ message:"Book Get Successfully", book })

});

bookRouter.put("/books/:id", async(req, res) => {
    
    const { id } = req.params.id;

    const { title,  author, description, publishedId } = req.body;

    let book;
    try {
        book =  Book.findByIdAndUpdate(id,{
            title,
            author,
            description,
            publishedDate: Date.now(),
            publishedId: publishedId
        });
    } catch (error) {
        return res.status(500).json({ message:"Please Check Internet", error })
    }
    
    return res.status(201).json({ message:"Book Post Successfully", book })

});


bookRouter.get("/books/:id", async(req, res) => {
    
    const id = req.params.id

    let book;
    try {
        book = await Book.findById(id);
    } catch (error) {
        return res.status(500).json({ message:"Please Check Internet", error })
    };

    return res.status(201).json({ message:"Book Get Successfully", book })

});



bookRouter.delete("/blog/:id", async(req, res) => {
    
    const id = req.params.id

    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (error) {
        return res.status(500).json({ message:"Please Check Internet", error })
    };

    return res.status(201).json({ message:"Book Delete Successfully", book })

});

module.exports = bookRouter;
