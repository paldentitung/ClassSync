const express = require("express");
const {
  getAllExams,
  createExam,
  deleteExam,
  updateExam,
} = require("../controllers/examsController");

const router = express.Router();

router.get("/", getAllExams);
router.post("/", createExam);
router.put("/:id", updateExam);
router.delete("/:id", deleteExam);
module.exports = router;
