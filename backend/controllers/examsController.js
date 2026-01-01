const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/examsData.json");

const getExams = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

const savedExams = (exam) => {
  fs.writeFileSync(filePath, JSON.stringify(exam, null, 2), "utf8");
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

exports.createExam = (req, res) => {
  const {
    name,
    subject,
    date,
    time,
    duration,
    totalMarks,
    isCompleted,
    status,
  } = req.body;
  const exams = getExams();

  if (!name || !subject || !date || !time || !duration || !totalMarks) {
    return res.status(400).json({ message: "Enter the valid info" });
  }

  const newExam = {
    id: Date.now(),
    name,
    subject,
    date,
    time,
    duration,
    totalMarks,
    isCompleted: isCompleted ?? false,
    status: status ?? "pending",
  };

  exams.push(newExam);
  savedExams(exams);

  return res.status(201).json({
    message: "Exam Created Successfully",
    exam: newExam,
  });
};
