import React from 'react'
import './css/Navigation.css'
import {Link} from 'react-router-dom'
import home from '../images/laptop-code-solid.svg'
import project from '../images/tasks-solid.svg'
import know from '../images/question-circle-regular.svg'

const Navigation = () => {
        return (
        <div className="navcontainer">
                <div className="navcolumn">
                        <Linki to="/" text="Home" source={home} icon="homeicon"/>
                        <Linki to="/projects" text="Projects" source={project} icon="projicon"/>
                        <Linki to="/knowmore" text="Know More!!" source={know} icon="knowicon"/>
                </div>
        </div>
    )
}

const Linki = ({to,text,source,icon}) => {
        return(
        <Link to={to} style={{ textDecoration: 'none',color: 'black'}}>
                <div className="link">
                        <img src={source} className="navicon" alt={icon}/>
                        <h4>{text}</h4>
                </div>
        </Link> 
        )
} 

export default Navigation


