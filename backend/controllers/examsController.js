const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/examsData.json");

const getExams = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

exports.getAllExams = (req, res) => {
  try {
    const exams = getExams();
    res.json(exams);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to read exams data" });
  }
};
