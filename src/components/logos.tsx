import React from 'react'
import "./styles/logo.css"

const Logos = () => {
  return ( 
    <div className=' container mx-auto '>

            <p className='text-textColor mb-10 text-center'>Join 1,500+ companies already video conferencing the ClearLink way</p>
        <div className="logos px-4">
            <div className="img mb-3 ">
                <img src="/assets/Shopifybig.png" alt="" />
            </div>
            <div className="img">
                <img src="/assets/Coinbase.png" alt="" />
            </div>
            <div className="img">
                <img src="/assets/Dropbox.png" alt="" />
            </div>
            <div className="img">
                <img src="/assets/Intercom.png" alt="" />
            </div>
            <div className="img">
                <img src="/assets/Marvel.png" alt="" />
            </div>
            <div className="img">
                <img src="/assets/Automattic svg.png" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Logos