const express = require('express');
const app = express();
var aluno = require('./routes/aluno');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded()); //form

// const path = require('path');
// app.use(express.static(path.join(__dirname, 'client')));

app.use('/api', aluno);

app.get("/", (req,res)=> {
    // res.set("Content-Type", "text/html");
    // res.type("html");
    res.send("<h1>Hello World from get</h1>");
});

// app.post("/", (req,res)=> {
//     res.send("<h1>Hello World from POST</h1>");
// });

// app.put("/", (req,res)=> {
//     res.send("<h1>Hello World from PUT</h1>");
// });

// app.delete("/", (req,res)=> {
//     res.send("<h1>Hello World from DELETE</h1>");
// });

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}` );
});