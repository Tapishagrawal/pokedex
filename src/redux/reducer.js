import { FETCH_ALL_DATA_REQUEST, FETCH_ALL_DATA_SUCCESS, FETCH_ALL_DATA_ERROR, FETCH_RANDOM_POKEMON_DATA_REQUEST, FETCH_RANDOM_POKEMON_DATA_ERROR, FETCH_RANDOM_POKEMON_DATA_SUCCESS } from "./actionType";

const initState = {
    allPokeonData: [],
    isLoading: false,
    isError: false,
    randomSinglePokemon: JSON.parse(localStorage.getItem("pokemon")) || null
};

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_DATA_REQUEST:
            return { ...state, isLoading: true };
        case FETCH_ALL_DATA_SUCCESS:
            return { ...state, allPokeonData: payload, isLoading: false };
        case FETCH_ALL_DATA_ERROR:
            return { ...state, isLoading: false, isError: true };

        case FETCH_RANDOM_POKEMON_DATA_REQUEST: {
            return { isLoading: true }
        }
        case FETCH_RANDOM_POKEMON_DATA_ERROR: {
            return { isLoading: false, isError: false }
        }
        case FETCH_RANDOM_POKEMON_DATA_SUCCESS: {
            return { isLoading: false, randomSinglePokemon: payload }
        }
        default:
            return state;
    }
};
