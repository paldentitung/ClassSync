const express = require("express");
const {
  getAllAssignments,
  createAssignment,
} = require("../controllers/assignmentsContoller");
const router = express.Router();

router.get("/", getAllAssignments);
router.post("/", createAssignment);
module.exports = router;
