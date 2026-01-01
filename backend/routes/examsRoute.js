const express = require("express");
const {
  getAllExams,
  createExam,
  deleteExam,
} = require("../controllers/examsController");

const router = express.Router();

router.get("/", getAllExams);
router.post("/", createExam);
router.delete("/:id", deleteExam);
module.exports = router;
