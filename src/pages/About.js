import React from "react";
import { FaArrowRight } from "react-icons/fa";
import aboutImage from "../assets/aboutus1.webp"; // Replace with your image
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-richblack-900 text-white px-4 sm:px-6 lg:px-10 py-12">
      
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 max-w-6xl mx-auto">
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            About <span className="bg-gradient-to-b from-sky-400 to-sky-200 bg-clip-text text-transparent">StudyNotion</span>
          </h1>
          <p className="text-richblack-200 text-lg mb-6">
            StudyNotion is a platform designed to empower learners with coding skills. Our mission is to make 
            learning accessible, engaging, and effective for everyone.
          </p>
          <div className="flex gap-4">
            <Link to ="/signup">
            <button className="bg-yellow-400 font-semibold text-lg px-6 py-2 rounded-md hover:scale-95 transition-transform duration-200 flex items-center gap-2">
              Get Started <FaArrowRight />
            </button>
            </Link>
            <Link to ="/contact">
            <button className="bg-richblack-700 font-semibold text-lg px-6 py-2 rounded-md hover:scale-95 transition-transform duration-200">
              Learn More
            </button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img src={aboutImage} alt="About" className="w-full h-auto rounded-xl shadow-lg" />
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-richblack-200 text-lg">
          We aim to make coding education accessible to everyone, providing hands-on learning experiences and expert guidance so that anyone can build real-world skills.
        </p>
      </div>

      {/* Team Section */}
      <div className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Alice Johnson", role: "Founder & CEO" },
            { name: "Bob Smith", role: "Lead Instructor" },
            { name: "Charlie Lee", role: "Full Stack Developer" },
          ].map((member, i) => (
            <div key={i} className="bg-richblack-800 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-200">
              <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-richblack-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 bg-richblack-800 py-12 text-center rounded-xl max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to start learning?</h2>
        <p className="text-richblack-200 mb-6">
          Join thousands of learners who are building their coding skills with StudyNotion.
        </p>
        <Link to ="/signup">
        <button className="bg-yellow-400 font-semibold text-lg px-6 py-3 rounded-md hover:scale-95 transition-transform duration-200 flex items-center gap-2 mx-auto">
          Get Started <FaArrowRight />
        </button>
        </Link>
      </div>

    </div>
  );
};

export default About;
