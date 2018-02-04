import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "./ui/Card";

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

    render() {
        const { singlePlayer } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h1>PLAYER PROFILE</h1>
                        {singlePlayer.name === undefined || singlePlayer.isFetching === true ? this._renderLoading() : this._renderCard()}
                        <button on></button>
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

export default connect(mapStateToProps, null)(Profile);