import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Userouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

dotenv.config();
const app = express();
const port = process.env.PORT

app.use(express.json())
// Connect to mangoose DB server
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {console.log("Connected to db")})
    .catch((error) => {console.log(error)})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.use("/api/user", Userouter)
app.use("/api/auth", authRouter )

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});