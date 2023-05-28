import React from 'react'
import Navbar from '../components/Navbar'
import Update from '../components/Update'
import BookingSummery from '../components/BookingSummery'

function Booking() {
  return (
    <div className='bg-[#F8F9FD] w-[1440px] h-[1024px] overflow-y-scroll mx-auto p-10'>
      <Navbar />
      <Update mt={'10'} mx={'auto'}></Update>
     <BookingSummery/>
    </div>


  )
}

export default Booking