import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-richblack-900 px-4 mb-5 mt-5">
      <div className="w-full max-w-lg bg-richblack-800 text-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

        <form onSubmit={submitHandler} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              required
              className="w-full p-3 rounded-md bg-richblack-700 border-b-2 focus:border-blue-500
              outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              required
              className="w-full p-3 rounded-md bg-richblack-700 border-b-2 focus:border-blue-500
              outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={changeHandler}
              required
              rows="5"
              className="w-full p-3 rounded-md bg-richblack-700 border-b-2 focus:border-blue-500
              outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors py-3 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
