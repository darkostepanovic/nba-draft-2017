import { combineReducers } from 'redux';
import playersReducer from './playersReducer';
import singlePlayerReducer from './singlePlayerReducer';

export default combineReducers({
    players: playersReducer,
    singlePlayer: singlePlayerReducer
});