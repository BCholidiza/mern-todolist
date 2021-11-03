const express = require ("express");
const app     = express();

app.get("/", (req, res) => {

    res.send("API running");
});

app.listen(3000, console.log(`Server running in 3000`));