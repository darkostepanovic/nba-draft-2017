import {ADD_FAVORITE, REMOVE_FAVORITE, REMOVE_ALL_FAVORITES} from "../actions/types";

export default function favoritesReducer(state = [], action) {
    switch (action.type) {
        case ADD_FAVORITE:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_FAVORITE:
            let newArr = [...state];
            let removed = newArr.filter(el => {
                return el.id !== action.payload
            });
            return removed;
        case REMOVE_ALL_FAVORITES:
            return [];
        default:
            return state;
    }
}