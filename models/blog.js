const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    content:{
        type: String, 
        required: true
    },
    author:{
        type: String, 
        required: true
    }
});

const blog = new mongoose.model("Blog", blogSchema);

module.exports = blog;