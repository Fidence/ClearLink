import React from 'react'
import "./styles/clear.css"
import { LuVideo } from "react-icons/lu";
import { RiVoiceprintLine } from "react-icons/ri";
import { FiCalendar } from "react-icons/fi";

const Clearlink = () => {
  return (
    <div className='container mx-auto clear flex flex-col justify-center   py-10'>
        <div className="clear_wrap px-4 md:px-4 ">
            <div className="clear_header   ">
                <p className='text-primary font-semibold'>The ClearLink Advantage</p>
                <h1 className='text-3xl font-semibold my-4'>Why choose ClearLink?</h1>
                <p className='text-textColor'>In a world where connection is everything, ClearLink takes the lead. Our <br /> cutting-edge video conferencing app offers:</p>
                </div>
                <div className="clear_box mt-10   ">
                <div className="clear_box_left ">
                    <div className="cont">
                       <div className="icon rounded-full bg-nav mb-4">
                         <LuVideo className='text-primary text-lg' />
                       </div>
                            <h4 className='font-semibold my-4'>Crystal-clear HD video</h4>
                            <p className='mt-4 '>No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
                    </div>
                    <div className="cont">
                      <div className="icon rounded-full  bg-nav">
                         <RiVoiceprintLine className='text-primary' />
                      </div>

                            <h4 className='font-semibold my-4'>Crystal-clear HD video</h4>
                            <p>No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
                    </div>
                    <div className="cont">
                     <div className="icon rounded-full  bg-nav">
                           <FiCalendar className='text-primary'/>
                     </div>
                            <h4 className=' font-semibold my-4'>Crystal-clear HD video</h4>
                            <p>No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
                    </div>
                    <div className="cont">
                       <div className="icon rounded-full  bg-nav">
                         <FiCalendar className='text-primary'/>
                       </div>
                            <p className=' font-semibold my-4'>Crystal-clear HD video</p>
                            <p>No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
                    </div>
                    
                </div>

                <div className="clear_box_right  mx-0 auto   ">
                     <img src="/assets/Rectangle 1.png" alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Clearlink