import { combineReducers } from 'redux';
import playersReducer from './playersReducer';
import singlePlayerReducer from './singlePlayerReducer';
import teamsReducer from './teamsReducer';
import selectedTeamReducer from './selectedTeamReducer';

export default combineReducers({
    players: playersReducer,
    singlePlayer: singlePlayerReducer,
    teams: teamsReducer,
    selected: selectedTeamReducer
});