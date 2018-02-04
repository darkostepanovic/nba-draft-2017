import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import FavoriteCard from './ui/FavoriteCard';

class Favorites extends Component {

    _renderCard = favorites => {
        if(favorites.length === 0) {
            return (
                <div className="col-md-12">
                    <p className="center">You didn't choose any favorites</p>
                </div>
            )
        }
        return favorites.map(favorite => {
            return (
                <div key={favorite.id} className="col-md-4">
                    <FavoriteCard data={favorite}/>
                </div>
            );
        })
    };

    _handleClick = () => {
        this.props.removeAllFavorites();
        this.props.history.goBack();
    };

    render() {
        return (
            <div className="container">
                <div className="row--flex">
                    <div className="col-md-8">
                        <h1>Your Favorites</h1>
                    </div>
                    <div className="col-md-4 button-wrapper">
                        <button className="btn" onClick={this._handleClick}><i className="material-icons left">arrow_back</i> Back</button>
                    </div>
                </div>
                <div className="row">
                    {this._renderCard(this.props.favorites)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({favorites}) => {
    return {
        favorites
    }
}

export default connect(mapStateToProps, actions)(Favorites);