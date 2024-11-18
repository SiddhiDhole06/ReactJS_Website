import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    to_name: 'Siddhi'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_sdlgfbn', // Replace with your service ID
        'template_s51y1mh', // Replace with your template ID
        formData,
        'S8M3pX3nZhPQDV6c8' // Replace with your user ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send the message, please try again later.');
        }
      );
  };

  return (
    <>
    <div>

      
    <div className="flex bg-slate-300">

          <div className="w-1/3">
            <div className="p-20">
              <h2 className="text-3xl ">Contact Us</h2>
              <br></br>
              <h3 className='text-2xl'>Get In Touch</h3>
              <br></br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis quia dicta enim fugit nisi voluptates, aliquam eligendi
                quasi quo Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis quia dicta enim fugit nisi voluptates, aliquam eligendi
              </p>
            </div>
          </div>


          <div className="w-2/3">
          <div className="max-w-3xl mx-auto mt-20 p-6 rounded-md shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='flex gap-5'>
        <div className='w-1/2'>
          <label className="block text-gray-600 mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Enter your name'
            className="w-full px-4 py-2 border-2 border-gray-500 bg-slate-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className='w-1/2'>
          <label className="block text-gray-600 mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Enter your e-mail'
            className="w-full px-4 py-2 border-2 border-gray-500 bg-slate-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        </div>
     

        <div>
          <label className="block text-gray-600 mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='Write your message'
            className="w-full px-4 py-2 border-2 border-gray-500 bg-slate-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button type="submit" className="w-full border-2 text-gray-600 border-gray-500 py-2 hover:bg-gray-600 hover:text-white">
          SUBMIT
        </button>
      </form>
    </div>
            
          </div>
        </div>
    </div>
    </>
  );
};

export default ContactForm;
