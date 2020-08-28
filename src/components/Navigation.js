import React from 'react'
import './css/Navigation.css'
import {Link} from 'react-router-dom'
import home from '../images/home.png'

const Navigation = () => {
    return (
        <div className="navcontainer">
                <div className="navcolumn">
                        <Link to={"/"} style={{textDecoration: 'none',color: 'black'}}>
                        <div className="link">
                                <img src={home} className="navicon" alt="homeicon"/>
                                <h2>HOME</h2>
                        </div>
                        </Link>
                        <Link to={"/projects"} style={{ textDecoration: 'none',color: 'black'}}>
                                <div className="link">
                                        <h2>PROJECTS</h2>
                                </div> 
                        </Link>
                        <Link to={"/about"} style={{ textDecoration: 'none',color: 'black'}}>
                                <div className="link">
                                        <h2>Ask Me Anything</h2>
                                </div>
                        </Link>
                </div>
        </div>
    )
}

export default Navigation


