import React, {useEffect, useState} from 'react';
import GeneroLista from "../Components/GeneroLista"
import GlobalApi from '../Services/GlobalApi';
import { Banner } from '../Components/Banner';
import JuegosPopulares from '../Components/JuegosPopulares';
import JuegosPorGeneroId from '../Components/JuegosPorGeneroId';

const Inicio = () => {
  const [allGamesList, setAllGamesList] = useState();
  const [gameListByGenero, setGameListByGenero] = useState([]);
  const [selectedGeneroName, setSelectedGeneroName] = useState('Action')
  useEffect(() => {
getAllGamesList();
getGameListPorGeneroId(4);
  },[])

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGamesList(resp.data.results)
     
    })
  }

  const getGameListPorGeneroId= (id) => {

 GlobalApi.getGameListByGenreId(id).then((resp) => {
setGameListByGenero(resp.data.results)
 })
  }
  return (
    <div className='grid grid-cols-4 px-8'>
      <div className=' hidden md:block'>
        <GeneroLista generoId={(generoId) =>getGameListPorGeneroId(generoId)}
        selectedGeneroName={(name) =>setSelectedGeneroName(name) }
        />
      </div>
      <div className='col-span-4 md:col-span-3'>
       {allGamesList?.length>0&& gameListByGenero.length>0?
       <div>
        <Banner gameBanner={allGamesList[0]}/>
        <JuegosPopulares gameList={allGamesList} />
        <JuegosPorGeneroId gameList={gameListByGenero}
        selectedGeneroName={selectedGeneroName}
        />
        </div>
        : null}
        </div>

    </div>
  )
}

export default Inicio