const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    author:{
        type: String, 
        required: true
    },
    description:{
        type: String, 
        required: true
    },
    publishedDate:{
        type: String, 
        required: true
    },
    publishedId:{
        type: String, 
        required: true
    }
});

const book = new mongoose.model("Book", bookSchema);

module.exports = book;