const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");


dotenv.config();




mongoose.connect(process.env.MONGO_URL)
.then(() => console.log(`database connected...`))
.catch((error) => console.log(error));


app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(blogRouter)


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`PORT AT ${PORT}`)
})