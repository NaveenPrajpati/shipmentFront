import logo from './logo.svg';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Booking from './pages/Booking';
import ShippingDetails from './pages/Shipping details';
import { createContext, useState } from 'react';

export const MyContext=createContext()
function App() {
const[islogin,setIslogin]=useState(false);

const value={
  islogin,setIslogin
}



  return (
    <div className=" bg-gradient-to-br from-slate-400 via-slate-600 to-red-400">
     


    <MyContext.Provider value={value}>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/shipping' element={<ShippingDetails/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
      </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
