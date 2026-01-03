const express = require("express");
const {
  getAllAssignment,
  createAssignment,
} = require("../controllers/assignmentsContoller");
const router = express.Router();

router.get("/", getAllAssignment);
router.post("/", createAssignment);
module.exports = router;
