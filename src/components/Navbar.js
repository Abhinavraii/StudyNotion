import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-full max-w-[1160px] py-4 gap-x-2 mx-auto
     mt-2 px-2 rounded-xl bg-gradient-to-r from-gray-900 via-black to-gray-950 p-4 shadow-md'>

        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className='text-richblack-100 flex gap-x-6'>
                <li className='transform hover:scale-110 transition duration-300 ease-in-out hover:text-orange-200'>
                    <Link to="/">Home</Link>
                </li>
                <li className='transform hover:scale-110 transition duration-300 ease-in-out hover:text-orange-200'>
                    <Link to="/about">About</Link>
                </li>
                <li className='transform hover:scale-110 transition duration-300 ease-in-out hover:text-orange-200'>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>

          {/* Note---
        1. !isLoggedIn && ko use kiya h taaki login button tabhi show kre jb user loggedin na ho and 
         login ya signup kar sake using button and same for signup
        2. isLoggedIn && ko use kiya h taaki log out button tabhi show kre jb user login ho taki user 
        chahe to logout kr sake using button and same for dashboard  */}

         {/* Buttons  */}
         
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
                
            }
           
        </div>
      
    </div>
  )
}

export default Navbar
