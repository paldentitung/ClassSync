const express = require("express");
const cors = require("cors");
const PORT = 3000;

const app = express();
const examsRoute = require("./routes/examsRoute");

app.use(cors());
app.use(express.json());

app.use("/api/exams", examsRoute);

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
