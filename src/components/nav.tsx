import React, { useState } from 'react'
import "../components/styles/nav.css";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdKeyboardArrowDown} from "react-icons/md";



const Navbar = () => {
  const [first, setFirst] = useState(false)
  return (
    <div className=''>
    <nav className="w-100 h-15 py-3 md: container flex items-center justify-between bg-nav/40 mx-auto py-4 px-6 rounded-full">
  
    <div className="logo">
      <img src="assets/logo.png" width={110} alt="" />
    </div>
    <div className="hidden    lg:flex space-x-6">
      <li className='text-secondary font-semibold flex items-center'>Product <MdKeyboardArrowDown/></li> 
      <li className='text-secondary font-semibold flex items-center'>Solution <MdKeyboardArrowDown/></li>
      <li className='text-secondary font-semibold flex items-center'>Resource <MdKeyboardArrowDown/></li>
      <li className='text-secondary font-semibold flex items-center'>Pricing <MdKeyboardArrowDown/></li>
   
    </div>
    <div className="flex items-center space-x-3">
   <button className=' lg:hidden ' onClick={()=>setFirst(!first)}>{first? <FaBars className='font-xl'/>:<FaXmark className='font-xl' />}</button>
   <a href="*" className=' block py-2 px-4 text-sm rounded-full baseline btn '>Talk to sales</a>
   <a href="*" className=' text-sm py-2 px-4  rounded-full baseline btnn'>Sign up for free</a>
  </div>


</nav>
{
  first &&
 <div className="" onClick={()=>setFirst(!first)}>
   <div className="absolute z-1000 top-30 left-0 right-50 flex flex-col gap-9 bg-nav/90 min-h-96 w-3/5 p-6">
      <li className='text-black font-semibold flex items-center'>Product <MdKeyboardArrowDown/></li> 
      <li className='text-black font-semibold flex items-center'>Solution <MdKeyboardArrowDown/></li>
      <li className='text-black font-semibold flex items-center'>Resource <MdKeyboardArrowDown/></li>
      <li className='text-black font-semibold flex items-center'>Pricing <MdKeyboardArrowDown/></li>
   
    </div>
 </div>
}

    </div>
  )
}

export default Navbar;