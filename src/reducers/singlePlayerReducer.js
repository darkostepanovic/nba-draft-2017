import { SINGLE_PLAYER } from "../actions/types";

export default function singlePlayerReducer(state = {}, action) {
    switch (action.type) {
        case SINGLE_PLAYER:
            return {
                ...state,
                singlePlayer: action.payload
            };
        default:
            return state;
    }
}