import React from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import '../static/css/Main.css'

import { createMemoryHistory } from 'history';

import Home from './Home'
import Projects from './Projects'
import About from './About'
import Navigation from './Navigation'

const history = createMemoryHistory();

const Main = () => {
    return (
        <div className="maincontainer">
            <Router history={history}>
                    <Navigation/>
                <div className="mainitem">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/projects" component={Projects} />
                        <Route path="/knowmore" component={About} />
                    </Switch>
                </div> 
            </Router>
        </div>
    )
}

export default Main
