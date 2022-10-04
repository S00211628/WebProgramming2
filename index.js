const express = require("express");
const app = express();
const port = 3000;
let books = [];



app.get("/", (req, res) => res.send("Hello World from Una!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.json());
app.use(express.urlencoded({extended: false})); //Parse URL-encoded bodies

app.get('/bananas', (req,res) => 
    res.send('hello world, this is bananas!'));

app.get('/chicken', (req,res) =>
    res.send('hellow world, this is chickens'));


  app.post("/books", (req, res) => {
    const book = req.body;
    books.push(book);

    res.send("book has been added to the database");
    console.log(`book name is ${book.name} number of book is ${books.length}`);
  });

app.get('/books', (req,res) => {
    res.send(books);
})

app.get('/books/:id', (req,res) => {
    let id = req.params.id;
    res.json(books[id]);
})

app.delete('/books/:id', (req,res) => {
    let id = req.params.id;
    console.log(`removing book ${books[id].name}`)
    books.splice(req.params.id, 1);
    res.send(books);
})