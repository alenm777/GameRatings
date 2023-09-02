import React, {useEffect, useState} from 'react';
import GeneroLista from "../Components/GeneroLista"
import GlobalApi from '../Services/GlobalApi';
import { Banner } from '../Components/Banner';
import JuegosPopulares from '../Components/JuegosPopulares';

const Inicio = () => {
  const [allGamesList, setAllGamesList] = useState();
  useEffect(() => {
getAllGamesList();
  },[])

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGamesList(resp.data.results)
    })
  }
  return (
    <div className='grid grid-cols-4 px-8'>
      <div className=' hidden md:block'>
        <GeneroLista />
      </div>
      <div className='col-span-4 md:col-span-3'>
       {allGamesList?.length>0?
       <div>
        <Banner gameBanner={allGamesList[0]}/>
        <JuegosPopulares gameList={allGamesList} />
        </div>
        : null}
        </div>

    </div>
  )
}

export default Inicio