import React, { useEffect } from 'react'
import "./styles/perfect.css"
import {  FaRegCheckCircle } from "react-icons/fa";
import   AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Perfect = () => {
    useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className='perfect container mx-auto '>
      <div className="perfect_wrap ml-5">
        <div className="perfect_txt">
          <h1 className='font-semibold text-4xl'>Ready to clear the path to <br /> perfect communication?</h1>
          <div className=" check my-10">
           <div className="flex items-center gap-4 mb-4">
             <FaRegCheckCircle className='text-primary'/> <span className='text-textColor'>30 days free trial</span>
           </div>
           <div className="flex items-center gap-4 mb-4 ">
             <FaRegCheckCircle className='text-primary'/> <span className='text-textColor'>Cancel at any time</span>
           </div>
           <div className="flex items-center gap-4 mb-4">
             <FaRegCheckCircle className='text-primary'/> <span className='text-textColor'>Access to all features</span>
           </div>
           <div className="flex items-center gap-4 mb-4">
             <FaRegCheckCircle className='text-primary'/> <span className='text-textColor'>3Peronalized onboarding</span>
           </div>
          </div>
          <a href="*" className='border-solid border-2 border-textColor py-2 px-3 text-sm rounded-full baseline'>Talk to sales</a>
          <a href="*" className='btnn text-sm py-3 px-5 ml-3 rounded-full baseline'>Sign up for free</a>
        </div>
        <div data-aos="flip-left" className="perfect_img mt-4">
           <img src="/assets/3_2 screen mockup.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Perfect