import React, { Component } from 'react';
import jordanImg from '../../assets/jordan.png';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={jordanImg} alt="jordan"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.data.name}<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Player Info<i className="material-icons right">close</i></span>
                    <p><strong>Player Name: </strong> {this.props.data.name}</p>
                    <p><strong>Birthday: </strong> {this.props.data.birthdate}</p>
                    <p><strong>Country: </strong>{this.props.data.country}</p>
                    <p><strong>School: </strong>{this.props.data.school}</p>
                    <p><strong>Height: </strong>{this.props.data.height}</p>
                    <p><strong>Weight: </strong>{this.props.data.weight} lbs</p>
                    <p><strong>NBA Team: </strong>{this.props.data.nbaTeam}</p>
                    <p><strong>Position: </strong>{this.props.data.position}</p>
                </div>
            </div>
        )
    }
}

export default Card;
