const express = require("express");
const books = require('./routes/books');
const home = require('./routes/home');
const database = require('./routes/database');
const app = express();
const port = 3000;


app.listen(port, () => console.log(`Example app listening on port ${port}!`));



app.use(express.json());
app.use(express.urlencoded({extended: false})); //Parse URL-encoded bodies

app.use('/books',books)
app.use('/', home)

let _book = [];

