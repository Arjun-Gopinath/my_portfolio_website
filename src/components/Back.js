import React from 'react'
import logo from '../static/images/Logo.svg';
import '../static/css/Back.css';
import Main from './Main'

const Back = () => {
    return (
        <div className="background">
            <div className="backcontainer">
                <img className="imageLogo" src={logo} alt="Logo"/>
            </div>
            <Main/>
        </div>
    )
}

export default Back
