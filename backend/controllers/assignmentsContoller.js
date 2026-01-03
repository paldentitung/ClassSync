const fs = require("fs");
const file = require("path");
const { json } = require("stream/consumers");

const filePath = file.join(__dirname, "../data/assignmentsData.json");

const getAssignment = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

const saveAssignments = (assignment) => {
  fs.writeFileSync(filePath, JSON.stringify(assignment, null, 2));
};
exports.getAllAssignment = (req, res) => {
  const data = getAssignment();
  return res.json(data);
};

exports.createAssignment = (req, res) => {
  const { title, subject, dueDate, assignmentStatus } = req.body;
  if (!title || !subject || !dueDate || !assignmentStatus) {
    res.status(400).json({
      message: "Invalid data",
    });
  }

  const data = getAssignment();

  const newAssignment = {
    id: Date.now(),
    title,
    subject,
    dueDate,
    assignmentStatus,
  };

  data.push(newAssignment);

  // update the file after adding new assignment

  saveAssignments(data);

  res.status(201).json({
    message: "Assignment created",
    assignment: newAssignment,
  });
};
