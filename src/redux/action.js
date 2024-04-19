import axios from "axios"
import { FETCH_ALL_DATA_REQUEST, FETCH_ALL_DATA_SUCCESS, FETCH_ALL_DATA_ERROR } from "./actionType"

export const fetchAllPokeonData = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_ALL_DATA_REQUEST })
        const res = await axios(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=200`);
        getPokemon(res.data.results, dispatch);
    } catch (error) {
        dispatch({ type: FETCH_ALL_DATA_ERROR })
        
    }
}

const getPokemon = async (data, dispatch) => {
    try {
        const allPokemonDetailedData = await Promise.all(data.map(async (item) => {
            const res = await axios(item.url);
            return res.data;
        }));
        dispatch({ type: FETCH_ALL_DATA_SUCCESS, payload: allPokemonDetailedData })
    } catch (error) {
        setIsLoading(false)
        console.error('Error fetching Pokémon data:', error);
    }
};