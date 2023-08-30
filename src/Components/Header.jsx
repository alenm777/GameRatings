import React, { useContext, useEffect } from 'react'
import logo from "../assets/Images/logo1.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { Tema } from '../Context/Tema';

const Header = () => {
   
    const {theme, setTheme }= useContext(Tema)

    useEffect(() =>{
    }, [])
  return (
    <div className='flex items-center p-3'>
        <img src={logo} width={90} height={90} />
        <div className='flex bg-slate-200 p-2 w-full
         mx-5 rounded-full items-center'>
            < HiOutlineMagnifyingGlass />
            <input
             type='text'
              placeholder='Buscar juegos'
               className=' px-2 bg-transparent dark:bg-cyan-500 outline-none'
                />
        </div>
        <div>
            {theme=='light' ? ( 
            <HiMoon
             className='text-[35px] bg-slate-200
            text-black p-1 rounded-full cursor-pointer'
             onClick={() => setTheme ('dark')} 
             /> 
             ) : ( 
             <HiSun
             onClick={() => setTheme ('light')}
            className='text-[35px] bg-slate-200
            text-black p-1 rounded-full cursor-pointer' 
             
            />
            )}
           
        </div>
    </div>
  )
}

export default Header