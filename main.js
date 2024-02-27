import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import QuestionsPage from "./pages/QuestionsPage";
import AskPage from "./pages/AskPage";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionsPage questions={questions} />} />
        <Route path="/ask" element={<AskPage />} />
      </Routes>
    </Router>
  );
};

export default App;
