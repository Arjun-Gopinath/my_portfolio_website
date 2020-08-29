import React from 'react'
import './css/Home.css'
import propic from '../images/propic.png'

const Home = () => {

    return (
        <div className="homecontainer">
            <div className="Propic" >
                <img src={propic} alt="Propic"/>
            </div>
            <div className="homedesc">
                <h1 id='demo'>
                    Arjun G
                </h1>
                <h3 id='demo'>
                A compassionate college student with great interest in computer applications and software development, 
                willing to obtain a position at your esteemed company that utilizes the technical skills and knowledge 
                for the development of the organization and in-turn an overall upliftment of my career.
                </h3> 
            </div>
            <div className="education">
                <div className="School">

                </div>
            </div>   
        </div>
    )
}

export default Home


