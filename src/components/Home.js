import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

import Table from './Table';
import Modal from "./ui/Modal";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            renderModal: false
        }

        this._closeModal = this._closeModal.bind(this);
    }

    componentDidMount() {
        this.props.getAllPlayers();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.favorites.length > 10 && this.state.renderModal === false) {
            this.setState({
                renderModal: true
            })
        }
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

    _closeModal() {
        this.setState({
            renderModal: false
        });

        const removeLast = this.props.favorites[this.props.favorites.length - 1];

        this.props.removeFavorite(removeLast);
    }


    render() {

        return (
            <div>
                {this.state.renderModal ? <Modal onModalClose={this._closeModal}/> : null}
                <div className='container-custom'>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="right">DRAFT CLASS 2017</h1>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="select-wrapper">
                                <label>Choose a team</label>
                                <select onChange={this._handleSelectChange} id="teamSelect" defaultValue="choose">
                                    <option value="choose">Choose team:</option>
                                    <option value="all">ALL TEAMS</option>
                                    {this._renderOptions()}
                                </select>
                            </div>
                            <button className="btn"><Link to="/favorites">View Favorites</Link></button>
                        </div>
                        <div className="col-md-9">
                            {this.props.players ? this._renderTable(this.props.players) : this._renderLoading()}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = ({players, singlePlayer, teams, favorites}) => {
    return {
        players,
        singlePlayer,
        teams,
        favorites
    }
};

export default connect(mapStateToProps, actions)(Home);