import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'


const GeneroLista = () => {

    const [generoLista, setGeneroLista] = useState([])
    useEffect(() => {
        getGeneroLista();
    }, [])
    const getGeneroLista= () => {
        GlobalApi.getGeneroLista.then((resp) => {
            console.log(resp.data.results);
            setGeneroLista(resp.data.results);
        })
    }
  return (
    <div>
        <h2 className='text-[30px] font-bold dark:text-white'>Géneros</h2>
        {generoLista.map((item) =>(
            <div className='flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group
            rounded-lg hover:dark:bg-gray-700 '>
        <img src={item.image_background} className='w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300' />
<h3 className='dark:text-white text-[18px] group-hover:font-bold '>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default GeneroLista