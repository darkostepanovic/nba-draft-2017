import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "./ui/Card";

import * as actions from '../actions';

class Profile extends Component {
    componentWillMount() {
        if(this.props.singlePlayer.name === undefined && this.props.singlePlayer.isFetching === false) {
            this.props.history.push('/');
        }
    }

    _renderLoading = () => (
        <div>
            <h1>LOADING...</h1>
        </div>
    );

    _renderCard = () => (
        <Card data={this.props.singlePlayer}/>
    );

    _handleClick = () => {
        this.props.removeAllFavorites();
        this.props.history.goBack();
    };

    render() {
        const { singlePlayer } = this.props;

        return (
            <div className="container-custom">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h1>PLAYER PROFILE</h1>
                        {singlePlayer.name === undefined || singlePlayer.isFetching === true ? this._renderLoading() : this._renderCard()}
                        <button className="btn" onClick={this._handleClick}><i className="material-icons left">arrow_back</i> Back</button>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({singlePlayer}) => {
    return {
        singlePlayer
    }
};

export default connect(mapStateToProps, actions)(Profile);