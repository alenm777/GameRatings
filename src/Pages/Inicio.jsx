import React from 'react';
import GeneroLista from "../Components/GeneroLista"

const Inicio = () => {
  return (
    <div className='grid grid-cols-4 px-8'>
      <div className=' hidden md:block'>
        <GeneroLista />
      </div>
      <div className='col-span-4 md:col-span-3 bg-blue-400'>Lista de Juegos</div>
    </div>
  )
}

export default Inicio