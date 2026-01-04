const fs = require("fs");
const file = require("path");

const filePath = file.join(__dirname, "../data/assignmentsData.json");

const getAssignment = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

const saveAssignments = (assignment) => {
  fs.writeFileSync(filePath, JSON.stringify(assignment, null, 2), "utf8");
};
exports.getAllAssignments = (req, res) => {
  const data = getAssignment();
  return res.json(data);
};

exports.createAssignment = (req, res) => {
  const { title, subject, dueDate, description, status } = req.body;
  if (!title || !subject || !dueDate || !description || !status) {
    return res.status(400).json({
      message: "Invalid data",
    });
  }

  const data = getAssignment();

  const newAssignment = {
    id: Date.now(),
    title,
    subject,
    dueDate,
    description,
    status,
  };

  data.push(newAssignment);

  // update the file after adding new assignment

  saveAssignments(data);

  res.status(201).json({
    message: "Assignment created",
    assignment: newAssignment,
  });
};
exports.deleteAssignments = (req, res) => {
  const id = parseInt(req.params.id);
  const assignment = getAssignment();
  const assignmentIndex = assignment.findIndex((a) => a.id === id);

  if (assignmentIndex === -1) {
    return res.status(404).json({
      message: "Not found",
    });
  }

  // delete the  assignment which user have selected
  assignment.splice(assignmentIndex, 1);

  // upated the data file
  saveAssignments(assignment);

  const assignmentToDelete = assignment[assignmentIndex];
  res.status(200).json({
    message: "Assignment delete",
    assignmentToDelete: assignmentToDelete,
  });
};
