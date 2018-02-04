import { SELECTED_TEAM } from "../actions/types";

const initialState = {
    team: 'all'
}

export default function selectedTeamReducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_TEAM:
            return {
                ...state,
                team: action.payload
            };
        default:
            return state;
    }
}