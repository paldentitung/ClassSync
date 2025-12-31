const express = require("express");
const { getAllAssignment } = require("../controllers/assignmentsContoller");
const router = express.Router();

router.get("/", getAllAssignment);
module.exports = router;
