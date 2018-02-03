import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import draftLogo from '../assets/Draftlogo.png';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <nav>
                                <div className="nav-wrapper">
                                    <Link to="/" className="brand-logo"><img src={draftLogo} alt="draft-logo"/></Link>

                                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/favorites">Favorites</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;