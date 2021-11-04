import express from "express";
import bodyParser from "body-parser";
import dotenv  from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import todoRoutes from "./routes/todoRoutes.js"

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

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use("/api/todos", todoRoutes);

app.use(notFound);
app.use(errorHandler);

// port to default to 5000 if there is no PORT in process environment
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));