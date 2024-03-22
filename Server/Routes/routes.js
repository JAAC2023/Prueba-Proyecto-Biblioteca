const router = require("express").Router();

const getBook = require("../Controllers/getBook");

router.get("/book", getBook);

module.exports = router;