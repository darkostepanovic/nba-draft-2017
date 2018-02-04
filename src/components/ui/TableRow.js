import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actions from '../../actions';

class TableRow extends Component {

    handleClick = (id) => {
        this.props.getSinglePlayer(id);
        this.props.history.push('/profile');
    };

    render() {
        return (
            <tr key={this.props.row.id} onClick={() => {this.handleClick(this.props.row.id)}}>
                <td>{this.props.row.firstName}</td>
                <td>{this.props.row.lastName}</td>
                <td>{this.props.row.positionOnDraft}</td>
                <td>{this.props.row.team}</td>
                <td>{this.props.row.previousTeam}</td>
            </tr>
        )
    }
}

const mapStateToProps = state => {
    return (
        state.singlePlayer
    )
};

export default connect(mapStateToProps, actions)(TableRow);