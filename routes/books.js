const express = require('express');
const { set } = require('mongoose');
const router = express.Router();
const {Book} = require('../models/books')

  router.post("/", async (req, res) => {
    let book = new Book(req.body);

    try {
      book = await book.save();
        res.location(`/${book._id}`).status(201).json(book);
    } catch (error) {
      res.status(500).send("db_error " + error);
    }
  });


  router.get("/",async (req, res) => {
   try{
    const books = await Book.find().lean();
    res.json(books);
   }
   catch{
    res.status(500).json('db error')
   }
  });

  router.get("/:id", async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (book) {
        res.json(book);
      } else {
        res.status(404).json("Not found");
      }
    } catch (error) {
      res.status(404).json("Not found: id is weird " + error);
    }
  });


router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (book) res.status(204).send();
    else
      res.status(404).json(`book with that ID ${req.params.id} was not found`);
  } catch {
    res.status(404).json(`funny id ${req.params.id} was not found`);
  }
});

router.put("/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            {$set:req.body});
        res.send(book)
    } catch (error) {
        res.status(404).json(`funny id ${req.params.id} was not found`);
    }
})


  module.exports = router;