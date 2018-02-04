import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div className="favorites-warning-modal">
                <div className="warning-wrapper">
                    <h2 className="center">
                        Maximum favorites reached
                    </h2>
                    <button className="btn center" onClick={() => {this.props.onModalClose()}}>Close</button>
                </div>
            </div>
        )
    }
}

export default Modal;