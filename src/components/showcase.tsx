import React, { useEffect } from 'react'
import Navbar from './nav';
import "./styles/showcas.css"
import { FaRobot } from "react-icons/fa";
import   AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Showcase = () => {
    useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  
  return (
    <div className='showcase pt-3 container mx-auto'>
        <Navbar/>
        <div className="wrapper  px-4">

        <div className="wrapper_flex ">

            <h1 className='wrapper_txt '>Uniting the world, <br/> one video call at a time</h1>
            <p className='text-textColor'>Experience the future of communication with ClearLink – <br /> where crystal-clear video conferencing meets <br />unparalleled simplicity.</p>

            <div className="flex items-center space-x-4 ">

              <a href="*" className='flex btnn text-sm py-2 px-4 bg-primary rounded-full baseline'>Sign up for free</a>
                  <FaRobot className='text-primary'/> <span className='text-primary font-semibold'>Discover AI assistant</span>
            </div>
            <div className="rating  flex items-center space-x-3">
              <img src="/assets/Avatar group.png" alt="" />
              <div className="stars">
               <div className="rating   flex items-center "> <img src="/assets/Stars.svg" alt="" /> <span className='text-xs font-bold text-secondary ml-2' >5.0</span></div>
                <span className='text-xs text-secondary'>from 3,000+ reviews</span>
              </div>
            </div>

        </div>
        <div data-aos="flip-left" className="wrapper_img "  >
          
               <img src="/assets/Frame 25.png"  alt="" width={500}  />

        </div>
        </div>


     
     </div>
  )
}

export default Showcase;