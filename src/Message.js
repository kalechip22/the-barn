// import React, { useState } from "react";
// import "./Message.css";
// import SMSForm from './SMSForm';

// function Message() {
//   const [recipient, setRecipient] = useState("");
//   const [text, setText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can send the announcement with title and text
//     console.log("Message Recipient:", recipient);
//     console.log("Message Text:", text);
//     // Reset the form fields after submission
//     setRecipient("");
//     setText("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 id="admin-title-txt">Send An Admin Message</h2>
//       <div>
//         <input
//           placeholder="Recipient"
//           type="text"
//           value={recipient}
//           onChange={(e) => setRecipient(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <textarea
//           placeholder="Text here..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit" id="send-mess-btn">Send</button>
//     </form>

    
//   );
// }

// export default Message;

import React, { Component } from 'react';
import "./Message.css";

class Message extends Component {
  constructor(props) {
      super(props);
      this.state = {
        message: {
          to: '',
          body: ''
        },
        submitting: false,
        error: false
      };
      this.onHandleChange = this.onHandleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onHandleChange(event) {
      const name = event.target.getAttribute('name');
      this.setState({
        message: { ...this.state.message, [name]: event.target.value }
      });
  }

  onSubmit(event) {
      event.preventDefault();
      this.setState({ submitting: true });
      fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.message)
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            this.setState({
              error: false,
              submitting: false,
              message: {
                to: '',
                body: ''
              }
            });
          } else {
            this.setState({
              error: true,
              submitting: false
            });
          }
        });
  }

  render() {
      return (
          <form
            onSubmit={this.onSubmit}
            className={this.state.error ? 'error sms-form' : 'sms-form'}
          >
            <h2 id="admin-title-txt">Send An Admin Message</h2>
            <div>
              <input
                placeholder="Recipient's #"
                type="tel"
                name="to"
                id="to"
                value={this.state.message.to}
                onChange={this.onHandleChange}
              />
            </div>
            <div>
              <textarea
                placeholder="Text here..."
                name="body"
                id="body"
                value={this.state.message.body}
                onChange={this.onHandleChange}
              />
            </div>
            <button id="send-mess-btn" type="submit" disabled={this.state.submitting}>
              Send
            </button>
           </form>
      );
    }

}

export default Message;