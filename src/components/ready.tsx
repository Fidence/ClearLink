import React, { useState } from 'react'
import "././styles/ready.css"
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsDashCircle } from "react-icons/bs";

const Ready = () => {
  const [first1, setFirst1] = useState(false);
  const [first2, setFirst2] = useState(false);
  const [first3, setFirst3] = useState(false);
  const [first4, setFirst4] = useState(false);
  const [first5, setFirst5] = useState(false);
 
  return (
    <div className='ready container mx-auto  px-4'>

      <div className="ready_right ">
        <div>
          <p className='text-primary font-semibold'>Support</p>
          <h1 className='text-3xl  font-bold text-textColor my-5'>FQs</h1>
          <p className=''>Everything you need to know about the product and billing. <br />Can’t find the answer you’re looking for? Please chat to our <br />friendly team.</p>
        </div>
      </div>
      <div className="ready_left">
      <div className="flex flex-col">
        
        <div className="homany  mt-4">
         
         {
          first1? <div className="flex justify-between gap-2  p-4 " >
         <span className='bbbb font-semibold '>How many participants can join a ClearLink video conference?</span>
         <button onClick={()=>setFirst1(!first1)}><AiOutlinePlusCircle className='text-textColor'/></button>
         </div>:
       <div className="ready_txt textColor bg-nav/40 p-4">
        <div className="flex justify-between  font-semibold gap-6  "><p>How many participants can join a ClearLink video conference?</p>  <button onClick={()=>setFirst1(!first1)}><BsDashCircle className='text-textColor '/></button></div>
        <p className='text-textColor px-3'>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
      
       </div>
         }

        </div>
        <div className="homany  mt-4">
         
         {
          first2? <div className="flex justify-between gap-2  p-4 " >
         <span className='bbbb font-semibold '>How many participants can join a ClearLink video conference?</span>
         <button onClick={()=>setFirst2(!first2)}><AiOutlinePlusCircle className='text-textColor'/></button>
         </div>:
       <div className="ready_txt textColor bg-nav/40 p-4">
        <div className="flex justify-between  font-semibold gap-6  "><p>How many participants can join a ClearLink video conference?</p>  <button onClick={()=>setFirst2(!first2)}><BsDashCircle className='text-textColor '/></button></div>
        <p className='text-textColor px-3'>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
      
       </div>
         }

        </div>
        <div className="homany mt-4">
         
         {
          first3? <div className="flex justify-between gap-2  p-4 " >
         <span className='bbbb font-semibold '>How many participants can join a ClearLink video conference?</span>
         <button onClick={()=>setFirst3(!first3)}><AiOutlinePlusCircle className='text-textColor'/></button>
         </div>:
       <div className="ready_txt textColor bg-nav/40 p-4">
        <div className="flex justify-between font-semibold gap-6  "><p>How many participants can join a ClearLink video conference?</p>  <button onClick={()=>setFirst3(!first3)}><BsDashCircle className='text-textColor '/></button></div>
        <p className='text-textColor px-3'>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
      
       </div>
         }

        </div>
        <div className="homany  mt-4">
         
         {
          first4? <div className="flex justify-between gap-2  p-4 " >
         <span className='bbbb font-semibold '>How many participants can join a ClearLink video conference?</span>
         <button onClick={()=>setFirst4(!first4)}><AiOutlinePlusCircle className='text-textColor'/></button>
         </div>:
       <div className="ready_txt textColor bg-nav/40 p-4">
        <div className="flex justify-between space-x-3 font-semibold gap-4  "><p>How many participants can join a ClearLink video conference?</p>  <button onClick={()=>setFirst4(!first4)}><BsDashCircle className='text-textColor '/></button></div>
        <p className='text-textColor px-3'>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
      
       </div>
         }

        </div>
        <div className="homany mt-4">
         
         {
          first5? <div className="flex justify-between gap-2  p-4 " >
         <span className='bbbb font-semibold '>How many participants can join a ClearLink video conference?</span>
         <button onClick={()=>setFirst5(!first5)}><AiOutlinePlusCircle className='text-textColor'/></button>
         </div>:
       <div className="ready_txt textColor bg-nav/40 p-4">
        <div className="flex justify-between space-x-3 font-semibold gap-4 "><p>How many participants can join a ClearLink video conference?</p>  <button onClick={()=>setFirst5(!first5)}><BsDashCircle className='text-textColor '/></button></div>
        <p className='text-textColor px-3'>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
      
       </div>
         }

        </div>

      </div>
      </div>
    </div>
  )
}

export default Ready