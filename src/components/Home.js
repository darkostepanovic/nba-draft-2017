import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Table from './Table';

class Home extends Component {

    componentDidMount() {
        this.props.getAllPlayers();
    }

    _renderLoading = () => {
        return (
            <div>
                <h1>LOADING...</h1>
            </div>
        )
    };

    _renderTable = (players) => (
        <Table data={players} {...this.props} />
    );

    render() {
        return (
            <div className='container'>
                {this.props.players ? this._renderTable(this.props.players) : this._renderLoading()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        state.players
    )
};

export default connect(mapStateToProps, actions)(Home);