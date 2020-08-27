import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import './css/Main.css'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Navigation from './Navigation'

const Main = () => {
    return (
        <div className="maincontainer">
            <BrowserRouter>
                    <Navigation/>
                <div className="mainitem">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/projects" component={Projects} />
                        <Route path="/about" component={About} />
                    </Switch>
                </div> 
            </BrowserRouter>
        </div>
    )
}

export default Main
