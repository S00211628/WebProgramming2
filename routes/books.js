const express = require('express');
const router = express.Router();
const books = [];

  router.post("/", (req, res) => {
    const book = req.body;

    const bookNumber = book.length;

    books.push(book);

    res.location(`/books/${bookNumber}`);
    res.status(201);
    res.json(book);
  });

  router.get("/", (req, res) => {
    res.send(books);
  });

  router.get("/:id", (req, res) => {
    let id = req.params.id;

    if (id > books.length) {
      res.status(404);
      res.json("page not found");
    } else {
      res.json(books[id]);
    }
  });

  router.delete("/books/:id", (req, res) => {
    let id = req.params.id;
    console.log(`removing book ${books[id].name}`);
    books.splice(req.params.id, 1);
    res.send(books);
  });

  module.exports = router;