import React, { Component } from 'react';
import TableRow from './ui/TableRow';

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            itemsPerPage: this.props.itemsPerPage
        }
    }

    _handleClick = event => {
        this.setState({
            currentPage: Number(event.target.id)
        })
    };

    _handleBack = () => {
        if(this.state.currentPage !== 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }
    };

    _handleForward = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
    };

    render() {
        const items = this.props.data;
        const { currentPage, itemsPerPage } = this.state;

        // Logic for displaying current items
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

        // Logic for displaying paginator
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => (
            number === this.state.currentPage ?
                <li className="active" key={number} id={number} onClick={this._handleClick}>{number}</li> :
                <li key={number} id={number} onClick={this._handleClick}>{number}</li>

        ));

        return (
            <div>
                <table className="responsive-table striped centered">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Position on draft</th>
                        <th>Club</th>
                        <th>Former Club</th>
                        <th>Choose favorites</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentItems.map(row => {
                        return (
                            <TableRow key={row.id} row={row} {...this.props}/>
                        )
                    })}
                    </tbody>
                </table>
                {pageNumbers <= 1 ? null :
                    <ul className="pagination right" id="pagination-list">
                        {this.state.currentPage === 1 ?
                            null :
                            <li onClick={this._handleBack}><span><i className="material-icons">chevron_left</i></span></li>
                        }
                        {renderPageNumbers}
                        {this.state.currentPage === pageNumbers.length ?
                            null :
                            <li onClick={this._handleForward}><span><i className="material-icons">chevron_right</i></span></li>
                        }
                    </ul>
                }
            </div>

        )
    }
}

export default Table;