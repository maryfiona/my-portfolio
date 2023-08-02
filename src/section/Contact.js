// src/components/Contact.js
import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section>
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me using the form below or through other channels:</p>
      
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required />

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-details">
        <p>Email: yourname@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yourusername/">linkedin.com/in/yourusername/</a></p>
        <p>GitHub: <a href="https://github.com/yourusername">github.com/yourusername</a></p>
        {/* Add other social media links here */}
      </div>
    </section>
  );
}

export default Contact;
