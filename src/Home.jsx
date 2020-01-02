import React from 'react'

import { Layout } from './Layout'
import { checkLogin } from './main'

class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Layout>
                    <div className="row">
                        <h4>Home</h4>
                    </div>
                </Layout>
            </React.Fragment>
        )
    }

    componentDidMount() {
        checkLogin()
    }

}

export default Home
