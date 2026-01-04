const express = require("express");
const {
  getAllAssignments,
  createAssignment,
  deleteAssignments,
} = require("../controllers/assignmentsContoller");
const router = express.Router();

router.get("/", getAllAssignments);
router.post("/", createAssignment);
router.delete("/:id", deleteAssignments);
module.exports = router;
