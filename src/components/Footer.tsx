import React from 'react'
import "././styles/footer.css"
import { FaTwitter,FaFacebook, FaInstagram, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa6";




const Footer = () => {
  return (
    <>
    <div className='footer px-6'>
      <div className="footer_wrap container mx-auto">
        <div className=" footer_img">
          <img src="/assets/logo.png " width={120} alt="" className='mb-7' />
          <p className=' wnn'>ClearLink is your gateway to effortless, high-quality video conferencing.  Join us in shaping the future of communication!</p>
        </div>

        {/* <div className="footer_list"> */}
          <div className="ll">
            <p className='font-semibold text-secondary mb-3'>Product</p>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
          </div>
          <div className="ll">
            <p className='font-semibold text-secondary mb-3'>Company</p>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Contact</li>
          </div>
          <div className="ll">
            <p className='font-semibold text-secondary mb-3'>Resources</p>
            <li>Blog</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </div>
          <div className="ll">
            <p className='font-semibold text-secondary mb-3'>Legal</p>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Licenses</li>
          </div>
     
      {/* </div> */}
        <div className=" flex flex-col gap-1">
          <p className='text-primary font-bold'>Get the app</p>
          <img src="/assets/apple.png " alt="" width={100} className='my-4' />
          <img src="/assets/android.png " alt="" width={100} />
        </div>
        </div>


    </div>
      <div className="socials bg-nav/30 p-5  md:flex  items-center justify-between mt-3 space-y-4 ">
        <div className="date text-secondary text-sm"> <span>©  {new Date().getFullYear()}</span>  ClearLink. All rights reserved.</div> 
        <div className="media flex items-center gap-5">
          <FaInstagram className='text-secondary'/>
          <FaGithub className='text-secondary'/>
          <FaYoutube className='text-secondary'/>
          <FaFacebook className='text-secondary'/>
          <FaTwitter className='text-secondary'/>
          <FaLinkedin className='text-secondary'/>

        </div>
      </div>
    </>
  )
}

export default Footer