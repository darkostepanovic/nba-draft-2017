import {ALL_TEAMS} from "../actions/types";

export default function teamsReducer(state = [], action) {
    switch (action.type) {
        case ALL_TEAMS:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
}