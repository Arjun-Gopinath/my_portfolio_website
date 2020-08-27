import React from 'react'
import './css/Home.css'
import propic from '../images/propic.png'

const Home = () => {
    return (
        <div className="homecontainer">
            <img className="Propic" src={propic} alt="Propic"/>
            <div className="homedesc">
                <h1>Arjun G</h1>
            </div>
        
        </div>
    )
}

export default Home
