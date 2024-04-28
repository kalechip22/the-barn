import React, { useState } from "react";
import "./AnnouncementForm.css";

function AnnouncementForm() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the announcement with title and text
    console.log("Announcement Title:", title);
    console.log("Announcement Text:", text);
    // Reset the form fields after submission
    setTitle("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="announce-title-txt">Create Announcement</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          value={text}
          placeholder="Text here..."
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <button type="submit" id="send-btn">Send</button>
    </form>
  );
}

export default AnnouncementForm;
