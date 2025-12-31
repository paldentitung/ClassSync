const express = require("express");
const { getAllExams } = require("../controllers/examsController");

const router = express.Router();

router.get("/", getAllExams);

module.exports = router;
