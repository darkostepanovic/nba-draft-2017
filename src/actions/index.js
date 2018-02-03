import { PLAYERS, SINGLE_PLAYER } from './types';
import fetchJsonp from 'fetch-jsonp';

export const getAllPlayers = () => dispatch => {

    fetchJsonp('http://stats.nba.com/stats/drafthistory?LeagueID=00&Season=2017')
    .then(response => {
        return response.json();
    })
    .then(json => {
        const players = json.resultSets[0].rowSet;
        const allPlayers = [];
        for (let i = 0; i<players.length; i++) {
            let id = players[i][0];
            let name = players[i][1];
            let splited = name.split(" ");

            let firstName = splited[0];
            let lastName = splited[1];
            let positionOnDraft = players[i][5];
            let team = `${players[i][7]} ${players[i][8]}`;
            let previousTeam = `${players[i][10]} - ${players[i][11]}`;

            let singlePlayer = ({
                id,
                firstName,
                lastName,
                positionOnDraft,
                team,
                previousTeam
            });

            allPlayers.push(singlePlayer);
        }
        dispatch({type: PLAYERS, payload: allPlayers});
    });
};

export const getSinglePlayer = id => dispatch => {
    fetchJsonp('http://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID=' + id)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            dispatch({type: SINGLE_PLAYER})
        })
}