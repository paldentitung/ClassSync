const express = require("express");
const cors = require("cors");
const PORT = 3000;

const app = express();
const examsRoute = require("./routes/examsRoute");
const notesRoute = require("./routes/notesRoute");
app.use(cors());
app.use(express.json());

// exams routes
app.use("/api/exams", examsRoute);

//notes route
app.use("/api/notes", notesRoute);
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
