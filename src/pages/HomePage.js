import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Services from '../components/Services'
import Chatbutton from '../assets/Chat button.png'
import Waterwaves from '../assets/Water waves2.png'

import { Link } from 'react-router-dom'
import ChatBox from '../components/ChatBox'


function HomePage() {
  const [chat, setChat] = useState(false)
  return (

    <div className=' sm:w-[1440px] bg-[#F8F9FD] mx-auto relative p-10'>
   <Navbar/>
      <div className="mt-[70px]  text-center">
        <h1 className='text-[42px] font-ftree leading-[50px]'>Hassle-Free Shipping Solutions</h1>
        <p className='mt-[8px] text-[22px] font-[500] font-ftree leading-[26px]'>Compare, book, and manage your freight across the world’s top logistics providers, all on one platform. </p>
      </div>
      <SearchBar/>
      <Services/>
      <div className='absolute right-[100px] top-[300px] '>
       {chat && <ChatBox/>}
      </div>
      <Link className='right-6 bottom-20 absolute hover:scale-105 z-10' onClick={() => { setChat(prev => !prev) }}>
      <img src={Chatbutton} alt="" className='w-20 h-20' /></Link>

      <img src={Waterwaves} alt="" className='w-full scale-x-105'/>
    </div>
  )
}

export default HomePage