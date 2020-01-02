import React, { Component } from 'react'

import { Layout } from './Layout'
import { checkLogin } from './main'

import { UserCreate } from './UserCreate'

export class Users extends Component {

    render() {
        return (
            <React.Fragment>
                <Layout>
                    <div className="row">
                        <h4>Users</h4>
                        <div className="ml-auto">
                            <UserCreate />
                        </div>
                    </div>
                </Layout>
            </React.Fragment>
        )
    }

    componentDidMount() {
        checkLogin()
    }

}

export default Users

