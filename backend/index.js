import express from "express";
import dotenv  from "dotenv";


const app     = express();

app.get("/", (req, res) => {

    res.send("API running");
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));