import React, { useState } from 'react'
import plane from '../assets/Plane icon.png'
import booksumicon from '../assets/icon.png'
import weightmeter from '../assets/weightmeter.png'
import xcover from '../assets/Xcover.png'
import frame64 from '../assets/Frame 64.png'
import vector3 from '../assets/Vector 3.png'
import Chatbutton from '../assets/Chat button.png'
import star1 from '../assets/star1.png'
import { Link } from 'react-router-dom'
import ChatBox from './ChatBox'


function BookingSummery() {
  const [chat, setChat] = useState(false)
  return (
    <div className='mt-20 mx-auto flex gap-10 w-full  justify-center'>
      <div className='w-[907px] h-full flex flex-col gap-2 items-start'>
        <div className='w-full h-[256.5px] bg-white summeryShadow rounded-2xl'>
          <h2 className='mt-[30px] ml-[26px] font-ftree font-[700] text-[23px] leading-[120%]'>Booking summary</h2>
          <h4 className='mt-[28px] w-[47px] h-[16px] text-[13px] font-[600] font-ftree mx-auto'>Express</h4>
          <div className='w-[837px] h-[117.5px] mx-auto mt-[29px] flex items-start'>
            <div className='text-center'>
              <img src={booksumicon} alt="" className='mx-auto' />
              <p className='font-ftree text-[19px] mx-auto w-fit mt-[18px] font-[600] leading-[120%]'>Delhi,<br /> 110003 India</p>
            </div>
            <div className='-mt-[20px]'>
              <img src={plane} alt="" className='mx-auto' />
              <div className='h-[.5px] w-[633px] border-[1.5px] border-black -mx-[30px] mt-[9px]'></div>
            </div>
            <div className='text-center'>
              <img src={booksumicon} alt="" className='mx-auto' />
              <p className='font-ftree text-[19px] mx-auto w-fit mt-[18px] font-[600] leading-[120%]'>Shanghai<br />200080, China</p>
            </div>
          </div>
     </div>
          <div className='flex w-full h-[165px]'>
            <div className='w-[232px] h-full rounded-[14px] summeryShadow bg-white'>
              <p className='font-ftree text-[19px] mx-auto w-fit mt-[18px] font-[600] text-[#5C5C5C]'>Total Weight/Volume</p>
              <img src={weightmeter} alt="" className='mx-auto mt-[10px]' />
              <p className='font-ftree text-[19px] font-[700] mx-auto w-[79px] mt-[8px]'>114.21KG</p>
            </div>
            <div className='ml-[10px] h-full w-[664px] rounded-[14px] summeryShadow bg-white'>
              <p className='font-ftree text-[19px] mx-auto w-[43px] h-[23px] ml-[26px] mt-[18px] font-[600] text-[#5C5C5C]'>Load</p>
              <div className='flex items-center justify-center'>
                <p className='text-[24px] font-[700] font-ftree w-[36px] h-[29px] mt-[15px]'>1x</p>
                <div className='w-[149px] h-[96px] flex flex-col items-center gap-[6px]'>
                  <div className='w-[49px] h-[71px]'>
                    <img src={vector3} alt="" className='w-[46px] h-[44px]' />
                  <p className='font-[700] font-ftree text-[16px] leading-[120%] mt-[8px] w-[49px]'>Pallets</p>
                  </div>
                  <p className='font-ftree text-[16px] leading-[120%] w-[149px] h-[19px]'>230x140x120 CM</p>
                </div>
              </div>
            </div>
          </div>

          <div className=' flex w-full h-[187px]'>
            <div className='w-[443px] h-full rounded-[14px] summeryShadow bg-white'>
              <p className='font-ftree font-[400]  text-[19px] ml-[26px] mt-[28px]'>Seller: Primetime Worldwide</p>
              <img src={frame64} alt="" className='mx-auto mt-[38px]' />
            </div>
            <div className='ml-[21px] w-[443px] h-full rounded-[14px] summeryShadow bg-white '>
              <p className='font-ftree font-[400]  text-[19px] ml-[26px] mt-[28px]'>Insurance:Xcover.com</p>

              <img src={xcover} alt="" className='mx-auto mt-[40px]' />

            </div>
          </div>

        
      </div>


      {/* price card */}

      <section className=' w-[366px] h-[576px] bg-white summeryShadow rounded-2xl px-5 pt-10 relative'>
        <p>Price details <span><img src={star1} alt="img" /> <span>know more</span></span></p>

        <div className='flex justify-between'>
          <p>Seller's Quote</p>
          <p>$ 3,659.25</p>
        </div>
        <div className='w-[272px] border-[1px] border-[#B3B3B380]'></div>
        <div>
          <div className='flex justify-between'>
            <p>Seller's Quote</p>
            <p>$ 3,659.25</p>
          </div>
          <div className='flex justify-between'>
            <p>Seller's Quote</p>
            <p>$ 3,659.25</p>
          </div>
        </div>
        <div className='w-[272px] border-[1px] border-[#B3B3B380]'></div>
        <div>
          <p>Add a promo code</p>
          <div className='flex justify-between'>

            <p>Seller's Quote</p>
            <p>$ 3,659.25</p>
          </div>
        </div>
        <div className='w-[272px] border-[1px] border-[#B3B3B380]'></div>
        <div className='flex justify-between'>
          <h2>Total:</h2>
          <h2>$ 4,102.13</h2>
        </div>

        <div className='absolute right-[150px] top-[200px] '>
          {chat && <ChatBox />}
        </div>

        <Link to={'/'}><button className='bg-[#9747FF] w-[276px] h-[48px]  rounded-[14px] text-white text-[23px] hover:scale-105 ' >Checkout</button>
        </Link>
        <Link onClick={() => { setChat(prev => !prev) }} className='absolute top-[550px] left-[280px] hover:scale-105'><img src={Chatbutton} alt="" className='w-20 h-20' /></Link>
      </section>


    </div>
  )
}

export default BookingSummery