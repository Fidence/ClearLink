import React from 'react'
import "./styles/shopify.css"
import { MdArrowBack, MdArrowForward} from "react-icons/md";



const Shopify = () => {
  return (
    <div className='shopi p-5 bg-nav/20 w-full '>
        <div className="shopi_left flex flex-col gap-10 mt-5">
            <img src="/assets/Shopifysmall.png " width={100} alt="" />
            <img src="/assets/Stars.svg" width={100} alt="" />
            <div className='txt font-semibold text-2xl'>ClearLink has upgraded our remote meetings. <br /> High-quality video, screen sharing, and <br />top-notch  security make it essential for our team.</div>
            
                <div className="flex items-center justify-between  space-x-3">
                    <div className="img flex items-center space-x-3 ">
                        <img src="/assets/Avatar (1).png" alt="" />
                        <div className="mmm">
                            <p className='text-sm font-semibold text-textColor'>Sarah Thompson</p>
                            <span className='text-sm text-textColor'>Project Manager, Shopify</span>
                        </div>
                    </div>
                    <div className="arrowIcon flex gap-3">
                                <button className='slide  rounded-full' ><MdArrowBack className='text-primary' /></button>
                                <button className='slide rounded-full'><MdArrowForward  className='text-primary'/></button>
                            </div>
                    </div>
        </div>
        <div className="shopi_right mt-7 ">
              <img src="/assets/Contents.png" alt="" />
        </div>
    </div>
  )
}

export default Shopify