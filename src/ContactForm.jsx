import { useState } from "react";

function ContactForm() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const maxLength = 380;

  const handleSend = () => {
    // No email logic — just simulate success
    setSent(true);
  };

  if (sent) {
    return <p>Mail send successfully</p>;
  }

  return (
    <div className="contact-form">
      {/* Subject */}
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="subject-input"
      />

      {/* Message */}
      <div className="message-wrapper">
        <textarea
          placeholder="Message..."
          maxLength={maxLength}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <span className="char-count">
          {message.length}/{maxLength}
        </span>
      </div>

      {/* Button */}
      <button onClick={handleSend} disabled={!message}>Send</button>
    </div>
  );
}

export default ContactForm;