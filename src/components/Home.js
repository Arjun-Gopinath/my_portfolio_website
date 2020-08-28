import React from 'react'
import './css/Home.css'
import propic from '../images/propic.png'

const Home = () => {

    return (
        <>
        <div className="homecontainer">
            <div className="Propic" >
                <img src={propic} alt="Propic"/>
            </div>
            <div className="homedesc">
                <h3 id='demo'>If you are seeing this you have entered the webpage of a 
                BTech graduate and an aspiring mobile app and web developer</h3> 
            </div>
            <div className="education">
                <h2></h2>
            </div>   
        </div>
        </>
    )
}

export default Home


