import express from "express";
import dotenv  from "dotenv";
import connectDB from "./config/db.js";

// initiate dotenv
dotenv.config();

// connect to MongoDB
connectDB();

// initiate express
const app = express();

// root
app.get("/", (req, res) => {

    res.send("API running");
});

// port to default to 5000 if there is no PORT in process environment
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));