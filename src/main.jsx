
import './app.scss'
import 'bootstrap'

import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Provider } from 'mobx-react';

import Home from './Home'
import NotFound from './NotFound'
import Login from './Login'
import Users from './Users'

import { decorate, observable, action } from "mobx"

export const history = createBrowserHistory()

class Store {
    @observable username

    constructor() {
        this.username = ""
    }

    @action login = (username) => {
        console.log('login:', username)
        this.username = username
    }
    @action logout = () => {
        this.username = ""
        history.push("/login")
    }
}

export const store = new Store()

export function checkLogin() {
    console.log("check login")
    if (store.username == "") { 
        history.push("/login")
    }
}

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>,
    document.getElementById('root')
)

