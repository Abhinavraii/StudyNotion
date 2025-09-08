import React from 'react'
import { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { HomePageExplore } from "../data/HomePageExplore";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";




const codeLines = [
  "<!DOCTYPE html>",
  '< lang="en">',
  "<head>",
  "<title>This is myPage</title>",
  "</head>",
  "<body>",
  '<h1><a href="/">Header</a></h1>',
  '<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>',
  '</nav>',
  "</body>",

];



const reactLines = [
  '<import React from "react";>',
  '<import CTAButton form "./Button":>',
  '<import TypeAnimation from "react-type";>',
  '<import {FaArrowRight} from ""react-icons/fa";>',
  <br />
  , '< const Home = ()=>{ >',
  '<return (>',
  '<<div>Home</div>>',
  '<}>',
  '<)>',
  '<export default Home;>'
]
const Home = ({ }) => {

  const [selectedCard, setSelectedCard] = useState(null);
 const [selectedTag, setSelectedTag] = useState("Free"); 

 const selectedCategory = HomePageExplore.find(
    (item) => item.tag.toLowerCase() === selectedTag.toLowerCase()
  );

  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev < codeLines.length ? prev + 1 : 0));
    }, 800); // speed of each line (ms)
    return () => clearInterval(interval);
  }, []);

  const [reactCurrentLine, setReactCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setReactCurrentLine((prev) => (prev < reactLines.length ? prev + 1 : 0));
    }, 800); // speed of each line (ms)
    return () => clearInterval(interval);
  }, []);



  return (
   
   
    <div className='min-h-screen w-screen  px-4 sm:px-6 lg:px-10'>
      <div className='flex flex-col mt-12'>
        <Link to ="/signup">
        <button className='rounded-full flex gap-2 bg-richblack-700 text-white items-center px-5 py-2 mx-auto  
        hover:bg-richblack-800 hover:scale-90 transition duration-300 ease-in-out font-semibold '>
          Become an Instructor
          <FaArrowRight />
        </button>
        </Link>

        <div className='items-center mx-auto mt-2 '>
          <h1 className='w-full text-center  font-semibold text-white text-5xl 
        items-center  mx-auto leading-tight mt-6'>
            Empower your Future with{" "}
            <span className='font-semibold text-5xl leading-tight
          bg-gradient-to-b from-sky-400 to-sky-200  bg-clip-text text-transparent '>Coding Skills</span>
          </h1>

        </div>

        <div className='mt-5 w-[90%] text-richblack-200 font-bold mx-auto  text-center text-xl'>
          <p>With our online coding courses, you can learn at your own pace, from anywhere in the world,
            and get access to a wealth of resources, including hands-on projects, quizzes, and personalized
            feedback from instructors.
          </p>
        </div>

        <div className='flex gap-5 justify-center mt-10'>
          <Link to ="/signup">
          <button className='bg-yellow-400 font-semibold text-xl rounded-md py-2 px-6 
          border-b-2 border-r-2 border-richblack-200  
          hover:border-transparent hover:scale-95 transition-all duration-200'>
            Learn More
          </button>
          </Link>
          <Link to ="/contact">
          <button className=' text-xl font-semibold bg-richblack-700 rounded-md py-2 px-6
           text-white border-b-2 border-r-2 border-richblack-200 
           hover:border-transparent hover:scale-95 transition-all duration-200'>
            Book a Demo
          </button >
          </Link>
        </div>

        <div className='mt-16 ml-5 mr-8 relative shadow-[10px_-5px_50px_-5px] shadow-blue-400'>
          <video
            src="/banner.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="shadow-[20px_20px_0_0_#F5F5F5] "
          />
        </div>
      </div>

      {/* Unlock your Coding Potential section--------------------------------------------------------------- */}
      <div className='flex flex-col md:flex-row mt-20 items-start gap-8 mb-10 relative w-full'>
        <div className='w-full ml-5'>
          <h1 className=' font-semibold text-white text-4xl leading-tight 
         '>Unlock your{" "}
            <span className='font-semibold text-4xl 
          bg-gradient-to-b from-sky-400 to-sky-200  bg-clip-text text-transparent '>Coding potential </span>{" "}
            with our online courses.</h1>
          <p className='font-bold text-richblack-200 text-base w-[85%] mt-4'>Our courses are designed and taught by industry experts who have years of experience
            in coding and are passionate about sharing their knowledge with you.</p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-start mt-14 '>
             <Link to ="/contact">
            <button className='flex  gap-2 items-center bg-yellow-400 font-bold text-lg rounded-md py-2 px-6 
          border-b-2 border-r-2 border-richblack-200  
          hover:border-transparent hover:scale-95 transition-all duration-200'>
              Try it Yourself
              <FaArrowRight />
            </button>
            </Link>
             <Link to ="/contact">
            <button className=' text-lg font-bold bg-richblack-700 rounded-md py-2 px-6
           text-white border-b-2 border-r-2 border-richblack-200 
           hover:border-transparent hover:scale-95 transition-all duration-200'>
              Learn More
            </button >
            </Link>
          </div>
        </div>

        <div className='flex relative w-full bg-richblack-800 border-2 mr-5 p-3 rounded- border-richblack-200 z-10'>
          <div className="absolute -top-10 w-72 h-72 right-[140px] bg-yellow-400 rounded-full
               filter blur-3xl opacity-30 z-0"></div>
          <div className='text-richblack-200 font-semibold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>


          </div>
          <div className="ml-4">
            <span className="text-yellow-400 font-mono">
              {codeLines.slice(0, currentLine).map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </span>
          </div>

        </div>
      </div>

      {/* Start Coding in second Section------------------------------------------------------------------------------------- */}

      <div className='flex flex-col md:flex-row mt-60 items-start  gap-8 mb-10 relative w-full'>


        <div className='flex relative w-full bg-richblack-800 border-2 mr-5 p-3 rounded- border-richblack-200 z-10'>
          <div className="absolute -top-10 w-72 h-72 right-[160px] bg-sky-400 rounded-full
               filter blur-3xl opacity-40 z-0"></div>
          <div className='text-richblack-200 font-semibold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>


          </div>
          <div className="ml-4">
            <span className="text-blue-50 font-bold">
              {reactLines.slice(0, reactCurrentLine).map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </span>
          </div>

        </div>
        <div className='w-full ml-5'>
          <h1 className=' font-semibold text-white text-4xl leading-tight 
         '>Start{" "}
            <span className='font-bold text-4xl 
          bg-gradient-to-b from-sky-400 to-sky-200  bg-clip-text text-transparent '>coding in <br />seconds </span>{" "}
          </h1>
          <p className='font-bold text-richblack-200 text-base w-[85%] mt-4'>Go ahead, give it a try. Our hands-on
            learning environment means you'll be writing real code from your very first lesson.</p>

          <div className='flex gap-6 justify-start mt-14 '>
            
            <button className='flex  gap-2 items-center bg-yellow-400 font-bold text-lg rounded-md py-2 px-4 
          border-b-2 border-r-2 border-richblack-200  
          hover:border-transparent hover:scale-95 transition-all duration-200'>
              Continue Lessions
              <FaArrowRight />
            </button>
            <button className=' text-lg font-bold bg-richblack-700 rounded-md py-2 px-4
           text-white border-b-2 border-r-2 border-richblack-200 
           hover:border-transparent hover:scale-95 transition-all duration-200'>
              Learn More
            </button >
          </div>
        </div>
      </div>

      {/* Unlock Power of Code Section ---------------------------------------------------------------------------------*/}

      <div className=''>
        <div className=' items-center mx-auto mt-24 '>
          <h1 className='w-full text-center  font-semibold text-white text-5xl 
        items-center  mx-auto leading-tight mt-6'>Unlock the <span className='font-bold text-4xl 
          bg-gradient-to-b from-sky-400 to-sky-200  bg-clip-text text-transparent'>Power of Code</span>  </h1>
          <p className='w-full text-center  font-bold text-richblack-200 text-lg
        items-center mx-auto mt-1'>Learn to Build Anything You Can Imagine</p>
        </div>
        {/* New way for me to create nav bar and buttons inside it..  Liked It */}
        <div className="mt-5 mb-5 ">
          <nav className="flex flex-wrap justify-center bg-richblack-700 rounded-full w-[90%] mx-auto py-2 mt-4 gap-2">
            {["Free", "New To Coding", "Most Popular", "Skills paths", "Career Paths"].map((item, i) => (
              <button
                key={i}
                 onClick={() => setSelectedTag(item)} 
                
                className="rounded-full flex gap-2 bg-richblack-700 text-white items-center  px-3 py-2 
                text-sm sm:text-base hover:bg-richblack-800 hover:scale-95 transition 
                duration-300 ease-in-out font-semibold  focus:bg-richblack-900"
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="flex w-full  flex-wrap justify-evenly gap-6 mt-10 mb-10  min-h-[300px] 
          bg-[url('/src/assets/bghome.svg')] bg-white bg-cover  p-6 ">
        {selectedCategory?.courses.map((course, i) => (
          <div
            key={i}
            onClick={() => setSelectedCard(i)}
            className={`flex  flex-col bg-richblack-800 text-white  justify-center p-4 w-[300px] 
             h-[200px]  ${selectedCard === i 
                        ? "bg-slate-600 text-black shadow-[20px_20px_0_0_#FFD700]" 
                        : "bg-richblack-800 text-white"}`}
             
          >
            <h2 className="text-xl font-semibold mb-2">{course.heading}</h2>
            <p className="text-sm text-richblack-300 mb-3">{course.description}</p>
            <div className="flex justify-between text-sm text-richblack-200">
              <span>Level: {course.level}</span>
              <span>{course.lessionNumber} Lessons</span>
            </div>
          </div>
        ))}
      </div>
        </div>

      </div>
       <div className='w-full h-[1px] bg-richblack-25 mb-5'></div>
     <footer className="w-full bg-richblack-900 text-white py-6 rounded-sm mt-1 mb-2">
  <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
    
    {/* Left side - Links */}
    <div className="flex gap-6 text-sm">
      <p className="cursor-pointer hover:underline">Privacy Policy</p>
      <p className="cursor-pointer hover:underline">Cookies Policy</p>
      <p className="cursor-pointer hover:underline">Terms</p>
    </div>

    {/* Right side - Info */}
    <div className="text-sm">
      <p>Made with <span className="text-yellow-400">React ⚛️</span></p>
      <div className="flex gap-8 text-xl mt-2">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
          <FaGithub />
        </a>  
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
          <FaTwitter />
        </a>
      </div>
    </div>
  </div>
</footer>

      
     
    </div>
    
  )
}

export default Home;
