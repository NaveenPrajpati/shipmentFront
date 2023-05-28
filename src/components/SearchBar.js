import React from 'react'

import { Link } from 'react-router-dom';

import location from '../assets/location.png'
import calendar from '../assets/calendar.png'
import ship from '../assets/ship.png'
import arrow from '../assets/arrowright.png'

function SearchBar() {
    return (
        <section className='mt-[112px] bg-white w-[90%] h-22 mx-auto rounded-xl shadow-xl  px-2 py-2'>
            <div className="h-full mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 my-auto">
                <div className='flex items-center w-[227px]'>
                    <img className='mr-[14px] ml-2' src={location} alt="" />
                    <input className='outline-none text-[#868686] text-[16px] fomt-[600] font-ftree' width={'122px'} height={'19px'} type="text" placeholder='Origin, Port, City' />
                </div>
                <div className='flex items-center w-[227px]'>
                    <img className='mr-[14px] ml-[9px]' src={location} alt="" />
                    <input className='outline-none text-[#868686] text-[16px] fomt-[600] font-ftree' width={'122px'} height={'19px'} type="text" placeholder='Destination, Port, City' />
                </div>
                <div className='flex items-center w-[227px] border-l-2'>
                    <img className='mr-[14px] ml-[9px]' src={calendar} alt="" />
                    <input className='outline-none text-[#868686] text-[16px] fomt-[600] font-ftree' width={'122px'} height={'19px'} type="date" placeholder='Origin, Port, City' />
                </div>
                <div className='flex items-center w-[227px] border-x-2'>
                    <img className='mr-[14px] ml-[9px]' src={ship} alt="" />
                    <input className='outline-none text-[#868686] text-[16px] fomt-[600] font-ftree' width={'122px'} height={'19px'} type="text" placeholder='Load' />
                </div>
                <Link to={'/shipping'} className=''><img src={arrow} alt="arrow" /></Link>
            </div>
        </section>
    )
}

export default SearchBar