const fs = require("fs");
const file = require("path");

const filePath = file.join(__dirname, "../data/assignmentsData.json");

const getAssignment = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};
exports.getAllAssignment = (req, res) => {
  const data = getAssignment();
  return res.json(data);
};
