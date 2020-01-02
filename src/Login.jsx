import React, { Component, Fragment  } from 'react'
import autobind from 'autobind-decorator'

import { store } from './main'

export class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            alertMessage: ""
        }
    }

    @autobind
    onSubmit(event) {
        const username = this.state.username
        store.login(username)
        this.props.history.push('/')
        event.preventDefault()
    }

    @autobind
    onChangeUsername(event) {
        event.preventDefault()
        const newUsername = event.target.value
        store.username = newUsername
        this.setState({
            username: newUsername
        })
    }

    @autobind
    onChangePassword(event) {
        event.preventDefault()
        const newPassword = event.target.value
        this.setState({
            password: newPassword
        })
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark">
                    <button className="btn m-0 p-0">
                        <div className="mr-3">
                            <i className="fa fa-bars fa-lg"></i>
                        </div>
                    </button>

                    <div className="navbar-brand">
                        <i className="fab fa-old-republic fa-lg"></i> G2
                    </div>

                </nav>


                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-8 col-sm-6 col-md-4 border p-4 mt-sm-5 ml-3 mr-3">

                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Username:</label>
                                    <input id="username" className="form-control" type="text"  onChange={this.onChangeUsername} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input id="password" className="form-control" type="password"  onChange={this.onChangePassword} />
                                </div>

                                <div className="text-center mb-3">
                                        {this.state.alertMessage}
                                </div>

                                <div className="text-center">
                                    <button onClick={this.onSubmit}  className="btn btn-primary btn-sm">Submit</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login
