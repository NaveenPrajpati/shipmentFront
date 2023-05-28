import React from 'react'
import ship from '../assets/ship2.png'
import briefcase from '../assets/briefcase.png'
import i24support from '../assets/i24support.png'
import globalsearch from '../assets/globalsearch.png'

export default function Services() {
    return (
        <div className='w-fit mt-24 mx-auto'>
            <h1 className='text-4xl font-[600] font-ftree w-fit mx-auto'>Services</h1>
            <div className="mt-10  flex flex-col sm:flex-row gap-4">
                <div className="py-[28px] px-[24px] w-[330px] h-[212px] bg-white rounded-xl serviceShadow">
                    <div className="flex items-center gap-[30px] h-[32px]">
                        <img src={ship} alt="" />
                        <h3 className='text-[20px] font-[500] leading-[130%] font-ftree'>Freight Services</h3>
                    </div>
                    <div className="mt-[20px] w-[277px] border-[#9E9E9E] border-[0.7px]"></div>
                    <p className='text-[16px] font-[500] leading-[130%] mt-[20px] font-ftree w-[283px] text-[#535353]'>Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.</p>
                </div>
                <div className="py-[28px] px-[24px] w-[330px] h-[212px] bg-white rounded-[16px] serviceShadow">
                    <div className="flex items-center gap-[30px] h-[32px]">
                        <img src={briefcase} alt="" />
                        <h3 className='text-[20px] font-[500] leading-[130%] font-ftree'>Business Services</h3>
                    </div>
                    <div className="mt-[20px] w-[277px] border-[#9E9E9E] border-[0.7px]"></div>
                    <p className='text-[16px] font-[500] leading-[130%] mt-[20px] font-ftree w-[283px] text-[#535353]'>We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.</p>
                </div>
                <div className="py-[28px] px-[24px] w-[330px] h-[212px] bg-white rounded-[16px] serviceShadow">
                    <div className="flex items-center gap-[30px] h-[32px]">
                        <img src={globalsearch} alt="" />
                        <h3 className='text-[20px] font-[500] leading-[130%] font-ftree'>Shipping & Logistics</h3>
                    </div>
                    <div className="mt-[20px] w-[277px] border-[#9E9E9E] border-[0.7px]"></div>
                    <p className='text-[16px] font-[500] leading-[130%] mt-[20px] font-ftree w-[283px] text-[#535353]'>Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.</p>
                </div>
                <div className="py-[28px] px-[24px] w-[330px] h-[212px] bg-white rounded-[16px] serviceShadow">
                    <div className="flex items-center gap-[30px] h-[32px]">
                        <img src={i24support} alt="" />
                        <h3 className='text-[20px] font-[500] leading-[130%] font-ftree'>24/7 Support</h3>
                    </div>
                    <div className="mt-[20px] w-[277px] border-[#9E9E9E] border-[0.7px]"></div>
                    <p className='text-[16px] font-[500] leading-[130%] mt-[20px] font-ftree w-[283px] text-[#535353]'>Receive support from our experts all over the world at every stage of the process, 24/7.</p>
                </div>
            </div>
        </div>
    )
}
