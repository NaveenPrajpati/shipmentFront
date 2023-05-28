import React from 'react'

export default function Update({mt,mx}) {
  return (
    <div className={`mt-${mt} mx-${mx} w-[573px]   flex`}>
        <div className="text-center">
          <div className="w-[39px] h-[39px] bg-[#D3B0FF] rounded-full text-white flex justify-center items-center text-[16px] font-[700] font-ftree leading-[120%] ">1
          </div>
          <p className='text-[13px] font-[400] font-ftree leading-[120%] w-[41px] h-[16px] mt-[8px]'>Search</p>
        </div>
        <div className='border-[2px] border-[#D3B0FF] w-[131px] h-[1px] mt-[20px]' />
        <div className="text-center">
          <div className="w-[39px] h-[39px] bg-[#D3B0FF] rounded-full text-white flex justify-center items-center text-[16px] font-[700] font-ftree leading-[120%] ">2
          </div>
          <p className='text-[13px] font-[400] font-ftree leading-[120%] w-[41px] h-[16px] mt-[8px]'>Recomended Servies</p>
        </div>
        <div className='border-[2px] border-[#D3B0FF] w-[131px] h-[1px] mt-[20px]' />
        <div className="text-center">
          <div className="w-[39px] h-[39px] bg-[#D3B0FF] rounded-full text-white flex justify-center items-center text-[16px] font-[700] font-ftree leading-[120%] ">3
          </div>
          <p className='text-[13px] font-[400] font-ftree leading-[120%] w-[41px] h-[16px] mt-[8px]'>Result</p>
        </div>
        <div className='border-[2px] border-[#D3B0FF] w-[131px] h-[1px] mt-[20px]' />
        <div className="text-center">
          <div className="w-[39px] h-[39px] bg-[#D3B0FF] rounded-full text-white flex justify-center items-center text-[16px] font-[700] font-ftree leading-[120%] ">4
          </div>
          <p className='text-[13px] font-[400] font-ftree leading-[120%] w-[41px] h-[16px] mt-[8px]'>Booking</p>
        </div>
      </div>
  )
}
