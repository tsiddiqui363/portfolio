import React, { useState } from 'react';
import './Contact.css'; // Make sure the CSS file exists and is styled

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd handle sending the form data to a server or email service.
    console.log(formData);
    // Implement feedback or redirect after successful submission
  };

  return (
    <div id="contact" className="contact-container section"> {/* Add id and section class */}
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactMe;
