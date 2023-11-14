import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        'service_bs93181', // Replace with your Email.js Service ID
        'template_mp9edlm', // Replace with your Email.js Template ID
        e.currentTarget, // Pass the form element using currentTarget
        'wCc8HIa_9V6A3PFAy' // Replace with your Email.js User ID
      );

      console.log('Email sent successfully:', response);

      // Show success toast
      toast.success('Email sent successfully!', { position: toast.POSITION.TOP_RIGHT });

      // Add any additional logic after successful email sending

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Email sending failed:', error);

      // Show error toast
      toast.error('Failed to send email. Please try again.', { position: toast.POSITION.TOP_RIGHT });

      // Handle error if needed
    }
  };

  return (
    <div className="contact p-8 rounded-lg shadow-lg w-[80%] btf">
      <h2 className="text-white text-2xl text-center font-serif mb-4">Contact Me</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-[rgb(126,225,102)] border border-transparent"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-[rgb(126,225,102)] border border-transparent"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-[rgb(126,225,102)] border border-transparent"
            id="message"
            name="message"
            rows={4}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          className="bg-[rgb(126,225,102)] text-black py-2 px-6 rounded-md hover:bg-[rgb(100,190,80)] transition-colors duration-300 font-serif border-1"
          type="submit"
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
