import axios from 'axios';

const key="c71ac1d55ef448d58f3624ae733be8cf";
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGeneroLista = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default {
    getGeneroLista,
    getAllGames,
    getGameListByGenreId
}