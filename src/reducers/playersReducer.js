import { PLAYERS } from "../actions/types";

export default function playersReducer(state = [], action) {
    switch (action.type) {
        case PLAYERS:
            return [
                ...action.payload
            ];
        default:
            return state;
    }
}