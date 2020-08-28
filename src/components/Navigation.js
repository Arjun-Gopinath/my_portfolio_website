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
                                        <h4>HOME</h4>
                                </div>
                        </Link>
                        <Link to={"/projects"} style={{ textDecoration: 'none',color: 'black'}}>
                                <div className="link">
                                        <h4>PROJECTS</h4>
                                </div> 
                        </Link>
                        <Link to={"/about"} style={{ textDecoration: 'none',color: 'black'}}>
                                <div className="link">
                                        <h4>KNOW MORE!!</h4>
                                </div>
                        </Link>
                </div>
        </div>
    )
}

export default Navigation


