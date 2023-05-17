import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    axios.post('/api/contact', formData)
      .then(() => {
        setIsSending(false);
        setIsSent(true);
      })
      .catch((error) => {
        setIsSending(false);
        setErrorMsg(error.response.data.message);
      });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

        {isSending ? (
          <button disabled>Sending...</button>
        ) : (
          <button type="submit">Send</button>
        )}

        {errorMsg && <div className="error">{errorMsg}</div>}
        {isSent && <div className="success">Message sent!</div>}
      </form>
    </div>
  );
}

export default Contact;
