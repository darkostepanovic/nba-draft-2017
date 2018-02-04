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

    render() {
        return (
            <div className='container'>
                <h1>DRAFT CLASS 2017</h1>
                { this.props.players ? this._renderTable(this.props.players) : this._renderLoading()}
            </div>
        )
    }
}

const mapStateToProps = ({players, singlePlayer}) => {
    return {
        players,
        singlePlayer
    }
};

export default connect(mapStateToProps, actions)(Home);