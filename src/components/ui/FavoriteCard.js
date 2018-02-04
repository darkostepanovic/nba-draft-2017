import React, { Component } from 'react';
import jordanImg from '../../assets/jordan.png';

class FavoriteCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={jordanImg} alt="jordan"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.data.firstName} {this.props.data.lastName}<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Player Info<i className="material-icons right">close</i></span>
                    <p><strong>Player Name: </strong> {this.props.data.firstName} {this.props.data.lastName}</p>
                    <p><strong>Birthday: </strong> {this.props.data.positionOnDraft}</p>
                    <p><strong>Country: </strong>{this.props.data.team}</p>
                </div>
            </div>
        )
    }
}

export default FavoriteCard;
