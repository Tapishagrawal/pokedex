import axios from "axios"
import { FETCH_ALL_DATA_REQUEST, FETCH_ALL_DATA_SUCCESS, FETCH_ALL_DATA_ERROR, FETCH_RANDOM_POKEMON_DATA_SUCCESS, FETCH_RANDOM_POKEMON_DATA_ERROR, FETCH_RANDOM_POKEMON_DATA_REQUEST } from "./actionType"

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

export const randomPokemonData = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_RANDOM_POKEMON_DATA_REQUEST })
        const id = Math.floor(Math.random() * 200)
        const res = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
        localStorage.setItem("pokemon", JSON.stringify(res.data));
        dispatch({ type: FETCH_RANDOM_POKEMON_DATA_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: FETCH_RANDOM_POKEMON_DATA_ERROR })
        console.log(error)
    }
}