import React, { useState } from "react";

function AskPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const question = {
      title,
      content,
    };

    fetch("/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>發問</h1>
      <form onSubmit={handleSubmit}>
        <label for="title">標題</label>
        <input type="text" id="title" name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <label for="content">內容</label>
        <textarea id="content" name="content" value={content} onChange={(event) => setContent(event.target.value)} />
        <button type="submit">發問</button>
      </form>
    </div>
  );
};

export default AskPage;
