import React from 'react'
import {DiGithubBadge} from 'react-icons/di'
import {FaLinkedinIn,FaInstagram} from 'react-icons/fa'
import './css/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="flinks">
                <Fcard
                icon = {<DiGithubBadge/>}
                links = "https://github.com/Arjun-Gopinath"
                />
                <Fcard
                icon = {<FaLinkedinIn/>}
                links = "https://www.linkedin.com/in/arjun-gopinath-b3b57b1a1/"
                />
                <Fcard
                icon = {<FaInstagram/>}
                links = "https://www.instagram.com/arju_g/"
                />
            </div>
        </div>
    )
}

const Fcard = ({icon,links}) => {
    return(
        <div className="fcard">
            <a href={links}>{icon}</a>
        </div>
    )
}

export default Footer
