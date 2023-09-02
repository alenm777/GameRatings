import React, {useEffect} from 'react'

const JuegosPorGeneroId = ({gameList}) => {
useEffect(() => {
console.log("Lista de Juegos", gameList )
},[])
  return (
    <div>JuegosPorGeneroId</div>
  )
}

export default JuegosPorGeneroId