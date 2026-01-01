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

exports.updateExam = (req, res) => {
  const id = parseInt(req.params.id);
  const exams = getExams();

  const ExamToBeUpdate = exams.findIndex((exam) => exam.id === id);

  if (ExamToBeUpdate === -1) {
    return res.status(404).json({
      message: "Not found",
    });
  }

  const existingExam = exams[ExamToBeUpdate];
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

  exams[ExamToBeUpdate] = {
    ...existingExam,
    name: name ?? existingExam.name,
    subject: subject ?? existingExam.subject,
    date: date ?? existingExam.date,
    time: time ?? existingExam.time,
    duration: duration ?? existingExam.duration,
    totalMarks: totalMarks ?? existingExam.totalMarks,
    isCompleted: isCompleted ?? existingExam.isCompleted,
    status: status ?? existingExam.status,
  };

  savedExams(exams);

  res.status(200).json({
    message: "Exam updated successfully",
    exam: exams[ExamToBeUpdate],
  });
};

exports.deleteExam = (req, res) => {
  const id = parseInt(req.params.id);
  const exams = getExams();
  const idx = exams.findIndex((exam) => exam.id === id);

  if (idx === -1) {
    return res.status(404).json({ message: "Not found" });
  }

  exams.splice(idx, 1);
  savedExams(exams);

  res.status(200).json({ message: "Exam Deleted" });
};
