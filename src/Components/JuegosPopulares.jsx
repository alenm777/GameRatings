import React, {useEffect} from 'react'

const JuegosPopulares = ({gameList}) => {
    useEffect(() => {
console.log(gameList)
    },[])
  return (
    <div>
        {gameList.map((item, index) => index<4&&(
        <div>
            <img src={item.background_image} />
        </div>
        ))}
    </div>
  )
}

export default JuegosPopulares
