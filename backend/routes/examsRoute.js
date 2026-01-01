const express = require("express");
const { getAllExams, createExam } = require("../controllers/examsController");

const router = express.Router();

router.get("/", getAllExams);
router.post("/", createExam);

module.exports = router;
