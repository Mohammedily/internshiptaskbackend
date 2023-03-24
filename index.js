const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const bookRouter = require("./routes/book");


dotenv.config();




mongoose.connect(process.env.MONGO_URL)
.then(() => console.log(`database connected...`))
.catch((error) => console.log(error));


app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(bookRouter)


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`PORT AT ${PORT}`)
})