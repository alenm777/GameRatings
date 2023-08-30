import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'


const GeneroLista = () => {

    useEffect(() => {
        getGeneroLista();
    }, [])
    const getGeneroLista= () => {
        GlobalApi.getGeneroLista.then((resp) => {
            console.log(resp.data.results)
        })
    }
  return (
    <div>GeneroLista ---</div>
  )
}

export default GeneroLista