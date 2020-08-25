import React from 'react'
import './css/Navigation.css'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navcontainer">
            <div className="navcolumn">
                <Link to={"/"} style={{textDecoration: 'none'}} >
                    <div className="link">
                        Home
                    </div>
                </Link>
                
                <Link to={"/projects"} style={{ textDecoration: 'none'}} >
                    <div className="link">
                        Projects
                    </div>
                </Link>
                
                <Link to={"/about"} style={{ textDecoration: 'none'}} >
                    <div className="link">
                        About
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navigation


