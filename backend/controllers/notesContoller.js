const fs = require("fs");
const file = require("path");

const filePath = file.join(__dirname, "../data/notesData.json");

const getNotes = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

exports.getAllNotes = (req, res) => {
  const data = getNotes();
  return res.json(data);
};
