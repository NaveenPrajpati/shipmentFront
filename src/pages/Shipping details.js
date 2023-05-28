import React from 'react'
import Navbar from '../components/Navbar'
import Update from '../components/Update'
import ship from '../assets/ship.png'
import SearchBar from '../components/SearchBar'

import editpen from '../assets/edit2.png'
import { Link } from 'react-router-dom'
import SellerCard from '../components/SellerCard'

export default function ShippingDetails() {
  return (
    <div className='w-[1440px] bg-[#F8F9FD] mx-auto relative p-10'>
      <Navbar />
      <div className='mt-[92.5px] flex justify-center'>
        <div className='flex items-center h-[52px] w-[211px] mr-[43px] bg-white rounded-[14px]'>
          <img className='mr-[14px] ml-[9px]' src={ship} alt="" />
          <input className='outline-none text-[#868686] text-[16px] fomt-[600] font-ftree w-[36px]' height={'19px'} type="text" placeholder='Load' />
        </div>
        <Update />
      </div>
      <SearchBar icon={editpen}/>
      <div className='w-full mt-[18px] border-[1px] border-[#B4B4B4]'></div>

      <div className='flex'>

        <div className='ml-[75px]'>
          <h3 className='mt-[39px] text-[16px] font-[700] leading-[120%] font-ftree h-[19px]'>3 Top Quote (6 in Total)</h3>
          <div className='mt-[39px] w-[256px] h-[166px]'>
            <select name="" id="" className='w-full h-[19px] mb-[30px] outline-none bg-inherit'>
              <option value="filter" className='font-[600] text-[16px] font-ftree'>Filter</option>
              <option value=""></option>
            </select>
            <select name="" id="" className='w-full h-[19px] mb-[30px] outline-none bg-inherit'>
              <option value="filter" className='font-[600] text-[16px] font-ftree'>Price</option>
              <option value=""></option>
            </select>
            <select name="" id="" className='w-full h-[19px] mb-[30px] outline-none bg-inherit'>
              <option value="filter" className='font-[600] text-[16px] font-ftree'>Mode</option>
              <option value=""></option>
            </select>
            <select name="" id="" className='w-full h-[19px] mb-[30px] outline-none bg-inherit'>
              <option value="filter" className='font-[600] text-[16px] font-ftree'>Seller</option>
              <option value=""></option>
            </select>

          </div>
        </div>



        <div>
          <div className='mt-[18px] bg-[#EBE8FF] w-[688px] h-[42px] rounded-[14px] bookingShadow flex mx-auto justify-evenly items-center'>
            <p className='bg-white rounded-[14px] w-[256px] h-[48px] bookinShadow1 text-[13px] font-[700] font-ftree leading-[120%]  text-[#868686] text-center'>Bestvalue 5-5 days. $3,121</p>
            <p className='text-[13px] font-[700] font-ftree leading-[120%] w-[154px] h-[16px] text-[#868686] text-center'>Quickest 5-5 days. $3,121</p>
            <p className='text-[13px] font-[700] font-ftree leading-[120%] w-[154px] h-[16px] text-[#868686] text-center'>Cheapest 5-5 days. $3,121</p>
          </div>

          <div className='mt-[40px] ml-[51px] w-[791px] '>

        
          <SellerCard/>
          <SellerCard/>
          <SellerCard/>
          
            
          </div>
        </div>
      </div>
    </div>
  )
}
