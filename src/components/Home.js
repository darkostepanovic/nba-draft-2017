import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Table from './Table';

class Home extends Component {

    componentDidMount() {
        this.props.getAllPlayers();
    }

    _renderLoading = () => (
        <div>
            <h1>LOADING...</h1>
        </div>
    );

    _renderTable = (players) => (
        <Table data={players} itemsPerPage={20} {...this.props} />
    );

    _handleSelectChange = event => {
        this.props.selectedTeam(event.target.value);
        this.props.getAllPlayers();
    };

    _renderOptions = () => {
        let element = document.getElementById('teamSelect');

        while (element!==null && element.hasChildNodes() && element.children.length > 2) {
            element.removeChild(element.lastChild);
        }

        let options = this.props.teams.map(function(team, index) {
            return (
                <option key={index} value={team}>{team}</option>
            )
        });

        return options;
    };


    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <h1>DRAFT CLASS 2017</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        { this.props.players ? this._renderTable(this.props.players) : this._renderLoading()}
                    </div>
                    <div className="col-md-3">
                        <div>
                            <label>Choose a team</label>
                            <select onChange={this._handleSelectChange} id="teamSelect" defaultValue="choose">
                                <option value="choose">Choose team: </option>
                                <option value="all">ALL TEAMS</option>
                                {this._renderOptions()}
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({players, singlePlayer, teams}) => {
    return {
        players,
        singlePlayer,
        teams
    }
};

export default connect(mapStateToProps, actions)(Home);