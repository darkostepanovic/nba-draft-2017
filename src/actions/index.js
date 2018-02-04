import moment from 'moment';
import {PLAYERS, SINGLE_PLAYER, FETCHING_SINGLE_PLAYER, ALL_TEAMS, SELECTED_TEAM} from './types';
import fetchJsonp from 'fetch-jsonp';

export const getAllPlayers = () => (dispatch, getState) => {
    fetchJsonp('http://stats.nba.com/stats/drafthistory?LeagueID=00&Season=2017')
    .then(response => {
        return response.json();
    })
    .then(json => {
        const players = json.resultSets[0].rowSet;
        const allPlayers = [];
        const allTeams = [];
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

            if(getState().selected.team === "all") {
                allPlayers.push(singlePlayer);
            } else {
                if (getState().selected.team === team) {
                    allPlayers.push(singlePlayer);
                }
            }

            if(!allTeams.includes(team)) {
                allTeams.push(team);
            }
        }
        dispatch({type: PLAYERS, payload: allPlayers});
        dispatch({type: ALL_TEAMS, payload: allTeams});
    });
};

export const getSinglePlayer = id => dispatch => {
    dispatch({type: FETCHING_SINGLE_PLAYER, payload: true});
    fetchJsonp('http://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID=' + id)
        .then(response => {
            return response.json();
        })
        .then(json => {

            const birthdate = json.resultSets[0].rowSet[0][6];
            const formattedBirthdate = moment(birthdate).format('DD/MM/YYYY');
            const country = json.resultSets[0].rowSet[0][8];
            const school = json.resultSets[0].rowSet[0][7];
            const height = json.resultSets[0].rowSet[0][10];
            const weight = json.resultSets[0].rowSet[0][11];
            const nbaTeam = json.resultSets[0].rowSet[0][17];
            const position = json.resultSets[0].rowSet[0][14];

            const singlePlayer = {
                name: json.resultSets[0].rowSet[0][3],
                birthdate: formattedBirthdate,
                country: country,
                school: school,
                height: height,
                weight: weight,
                nbaTeam: nbaTeam,
                position: position
            };
            dispatch({type: SINGLE_PLAYER, payload: singlePlayer});
            dispatch({type: FETCHING_SINGLE_PLAYER, payload: false});
        })
};

export const selectedTeam = team => dispatch => {
    dispatch({type: SELECTED_TEAM, payload: team});
};