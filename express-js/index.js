const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.get("/", (req,res)=> {
    // res.set("Content-Type", "text/html");
    res.type("html");
    res.send("<h1>Hello World from get</h1>");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}` );
});