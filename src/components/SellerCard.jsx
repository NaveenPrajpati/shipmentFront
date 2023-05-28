import React from 'react'
import chatButton from '../assets/Chat button.png'
import location from '../assets/location.png'
import airplane from '../assets/airplane.png'
import couierpartner from '../assets/Couier partner.png'
import vector from '../assets/Vector.png'
import { Link } from 'react-router-dom'

export default function SellerCard() {
  return (
    <div className='bg-white w-full h-[144px] mb-[18px] rounded-[14px] bookingShadow2 flex justify-between'>
    <div className='ml-[29px] my-auto h-[109px] flex flex-col justify-evenly'>
      <div className='flex'>
        <div className=''> <span></span><span>Best Value</span></div>
        <p>Express</p>
        <p>Est. 5 days</p>
      </div>
      <div className='flex'>
        <img src={location} alt="" />
        <p>110003, Delhi</p>
        <div className='w-[24px] border-[1px] h-[.5px] border-[#565656]'></div>
        <img src={airplane} alt="" />
        <div className='w-[24px] border-[1px] h-[.5px] border-[#565656]'></div>
        <img src={location} alt="" />
        <p>200080, Shanghai</p>
      </div>
      <div className='flex'>
        <img src={couierpartner} alt="" />
        
        <img src={vector} alt="" />
        <img src={vector} alt="" />
      </div>
    </div>
    <div className='flex flex-col justify-evenly border-l-2 pl-2 mr-[30px]'>
      <h3>$ 3,982.63</h3>
      <Link to={'/booking'} className='bg-[#6F57E9] py-[10px] px-[34] rounded-[14px] text-white text-center'>Select</Link>
      <Link>View details</Link>
    </div>
  </div>
  )
}
