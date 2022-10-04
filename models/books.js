const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  year_written: Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = { Book };
