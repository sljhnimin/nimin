import React from "react";

function QuestionsPage({ questions }) {
  return (
    <div>
      <h1>最新問題</h1>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>
            <a href={`/questions/${question._id}`}>{question.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsPage;
