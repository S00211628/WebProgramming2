const express = require("express");
const { route } = require("./books");
const router = express.Router();

router.get("/", (req, res) => res.send("Hello World from Una!"));

router.get("/bananas", (req, res) => res.send("hello world, this is bananas!"));

router.get("/chicken", (req, res) => res.send("hellow world, this is chickens"));



module.exports = router;
