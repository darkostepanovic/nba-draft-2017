import { SINGLE_PLAYER, FETCHING_SINGLE_PLAYER } from "../actions/types";

const initialState = {
    isFetching: false
};

export default function singlePlayerReducer(state = initialState, action) {
    switch (action.type) {
        case SINGLE_PLAYER:
            return {
                ...state,
                ...action.payload
            };
        case FETCHING_SINGLE_PLAYER:
            return {
                ...state,
                isFetching: action.payload
            };
        default:
            return state;
    }
}