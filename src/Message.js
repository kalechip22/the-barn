import React, { useState } from "react";
import "./Message.css";

function Message() {
  const [recipient, setRecipient] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the announcement with title and text
    console.log("Message Recipient:", recipient);
    console.log("Message Text:", text);
    // Reset the form fields after submission
    setRecipient("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="admin-title-txt">Send An Admin Message</h2>
      <div>
        <input
          placeholder="Recipient"
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <button type="submit" id="send-mess-btn">Send</button>
    </form>
  );
}

export default Message;
