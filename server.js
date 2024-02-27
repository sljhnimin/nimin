const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/anonymous-question-system", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const questionSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Question = mongoose.model("Question", questionSchema);

app.get("/api/questions", async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

app.post("/api/questions", async (req, res) => {
  const question = new Question(req.body);
  await question.save();
  res.json(question);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
