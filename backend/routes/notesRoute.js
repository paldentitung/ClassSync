const { getAllNotes } = require("../controllers/notesContoller");
const express = require("express");
const router = express.Router();

router.get("/", getAllNotes);

module.exports = router;
