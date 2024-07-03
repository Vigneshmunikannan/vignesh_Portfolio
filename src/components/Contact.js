import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState(''); // 'success' or 'error'
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const scripturl = process.env.REACT_APP_SCRIPTURL;
      console.log(scripturl)
      const response = await fetch(`${scripturl}`, {
        method: 'POST',
        body: new URLSearchParams(formData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if (response.ok) {
        setFeedbackMessage('I have received your message. I will contact you soon. Thank you.');
        setFeedbackType('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFeedbackMessage('There is a technical issue in sending information, try again after some time.');
        setFeedbackType('error');
      }
    } catch (error) {
      setFeedbackMessage('There is a technical issue in sending information, try again after some time.');
      setFeedbackType('error');
    }
    setLoading(false);
    setTimeout(() => {
      setFeedbackMessage('');
    }, 2500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      className="contact-container"
    >
      <div className="contact-details">
        <h3>Contact Me</h3>
        
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          autoComplete="name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          autoComplete="email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          autoComplete="message"
          required
        ></textarea>

        <div className='btn'>
          <p className={`feedbackMessage ${feedbackType}`}>{feedbackMessage}</p>
          <button type="submit" disabled={loading}>Submit</button>
        </div>

      </form>
    </motion.div>
  );
};

export default Contact;
