import React, { useContext, useState } from 'react'
import dollarsquare from '../assets/dollarsquare.png'
import { MyContext } from '../App'
import { login } from '../services/requests'



export default function Navbar() {

  const [logForm, setLogForm] = useState(false)

  const [logData, setLogData] = useState({
    email: '',
    password: ''
  })

  const { islogin, setIslogin } = useContext(MyContext)

  function handleChange(event) {
    setLogData({ ...logData, [event.target.name]: event.target.value })
  }

  async function handleLogin(event) {
    event.preventDefault()
    console.log(logData)
    await login(logData)
      .then(res => {
        console.log(res.data)
        setIslogin(true)
        setLogForm(false)

      })
      .catch(error => console.log(error))

  }


  return (
    <div>
      <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between'>
        <div className="text-[42px] font-bold ">Ship
          <span className='bgpurple'>mate</span>
        </div>
        <div className='flex items-center'>
          {!islogin && <button className='bg-[#6F57E9] py-[12px] rounded-[12.44px] w-[150.22px] text-[19px] text-white font-[600] mr-[8.89px]' onClick={() => setLogForm(true)}>Login</button>}
          {islogin && <button className=''><img src={dollarsquare} alt="" className='w-[48px] h-[48px]' /></button>}
          {islogin && <button className='bg-[#6F57E9] h-[48px] rounded-[12.44px] w-[150.22px] text-[19px] text-white font-[600] mr-[8.89px]'>Track shipment</button>}
          {!islogin && <button className='bg-white py-[12px] rounded-[12.44px] w-[150.22px] text-[19px] font-[600] border-[#6F57E9] border-[1.77px]'>Learn more</button>}
        </div>
      </div>

      {logForm && <div className='mt-10 p-2 bg-purple-400 w-fit flex  flex-col gap-2'>

        <input type="text" placeholder='enter email' onChange={handleChange} name='email' />
        <input type="password" name="password" id="" placeholder='enter password' onChange={handleChange} />
        <button className='px-1  text-white' onClick={handleLogin}>login</button>

      </div>}

    </div>
  )
}
