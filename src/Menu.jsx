import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { store } from './main'


export class Menu extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="mb-2">
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item active"><i className="fas fa-hammer"></i> Menu </div>

                    <Link className="dropdown-item" to="/"><i className="fas fa-home"></i> Home </Link>
                    <Link className="dropdown-item" to="/users"><i className="fas fa-users"></i> Users </Link>

                    <div className="dropdown-divider mb-3"></div>

                    <div className="dropdown-item" onClick={store.logout}><i className="fas fa-sign-out-alt"></i> Logout </div>
                    <div className="dropdown-divider mb-3"></div>
                </div>
            </React.Fragment>
        )
    }

}

export default Menu


