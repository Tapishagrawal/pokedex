import { FETCH_ALL_DATA_REQUEST, FETCH_ALL_DATA_SUCCESS, FETCH_ALL_DATA_ERROR } from "./actionType";

const initState = {
    allPokeonData: [],
    isLoading: false,
    isError: false
};

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_DATA_REQUEST:
            return { ...state, isLoading: true };
        case FETCH_ALL_DATA_SUCCESS:
            return { ...state, allPokeonData: payload, isLoading: false };
        case FETCH_ALL_DATA_ERROR:
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }
};
