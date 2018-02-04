import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actions from '../../actions';

class TableRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        };
    }

    _handleClick = (id) => {
        this.props.getSinglePlayer(id);
        this.props.history.push('/profile');
    };

    _handleCheckbox = (event) => {
        event.stopPropagation();

        if(!this.state.checked && this.props.favorites.length < 11) {
            this.props.addFavorite(this.props.row);
        } else if (this.state.checked) {
            this.props.removeFavorite(this.props.row);
        }

        if(this.props.favorites.length < 10) {
            this.setState({
                checked: !this.state.checked
            });

            if(this.props.favorites.length > 10) {
                this.setState({
                    checked: !this.state.checked
                })
            }
        }
    };

    render() {
        return (
            <tr key={this.props.row.id} onClick={() => {this._handleClick(this.props.row.id)}}>
                <td>{this.props.row.firstName}</td>
                <td>{this.props.row.lastName}</td>
                <td>{this.props.row.positionOnDraft}</td>
                <td>{this.props.row.team}</td>
                <td>{this.props.row.previousTeam}</td>
                <td onClick={this._handleCheckbox}>
                    <input type="checkbox" checked={this.state.checked}  />
                </td>
            </tr>
        )
    }
}

const mapStateToProps = ({singlePlayer, favorites}) => {
    return {
        singlePlayer,
        favorites
    }
};

export default connect(mapStateToProps, actions)(TableRow);