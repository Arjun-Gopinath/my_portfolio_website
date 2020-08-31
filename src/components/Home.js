import React from 'react'
import './css/Home.css'
import propic from '../static/images/propic.png'
import {DiMongodb,DiDjango} from 'react-icons/di'
import {FaVuejs,FaAngular,FaUnity,FaReact,FaCss3Alt,FaHtml5,FaNodeJs,FaPython} from 'react-icons/fa'
import {SiRails,SiIonic,SiFirebase, SiJavascript,SiDart,SiFlutter,SiAndroidstudio} from 'react-icons/si'

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
                <h1>Places of Study</h1>
                <div className="school">
                    <Education name="NSS College Of Engineering" gradYear="2021" place="Palakkad" />
                    <Education name="Chinmaya Vidyalaya Vaduthala" gradYear="2017" place="Kochi" />
                    <Education name="Chinmaya Vidyalaya Vaduthala" gradYear="2015" place="Kochi" />
                </div>
                
                <h1>Expert in...</h1>
                
                <div className="pickrow">
                  <Pick pick={<FaHtml5 size="64" color="red"/>}/>
                  <Pick pick={<FaCss3Alt size="64" color="lightblue"/>}/>
                  <Pick pick={<FaPython size="64" color="yellow"/>}/>
                  <Pick pick={<FaReact size="64" color="blue"/>}/>
                  <Pick pick={<SiDart size="64" color="cyan"/>}/>
                  <Pick pick={<FaUnity size="64" color="white"/>}/>
                  <Pick pick={<SiFlutter size="64" color="cyan"/>}/>
                  <Pick pick={<SiAndroidstudio size="64" color="green"/>}/>
                </div>

                <h1>Novice in....</h1>
                <div className="pickrow">
                    <Pick pick={<DiMongodb size="64" color="green"/>}/>
                    <Pick pick={<FaNodeJs size="64" color="lightgreen"/>}/>
                    <Pick pick={<SiJavascript size="64" color="yellow"/>}/>
                    <Pick pick={<DiDjango size="64" color="whitesmoke"/>}/>
                    <Pick pick={<SiFirebase size="64" color="yellow"/>}/>
                </div>
                <h1>Now Learning...</h1>
                <div className="pickrow">
                    <Pick pick={<FaAngular size="64" color="red"/>}/>
                    <Pick pick={<SiIonic size="64" color="lightblue"/>}/>
                    <Pick pick={<FaVuejs size="64" color="lightgreen"/>}/>
                    <Pick pick={<SiRails size="64" color="red"/>}/>
                    
                </div>
            </div>   
        </div>
    )
}

export default Home

const Education = ({name,gradYear,place}) =>{
    return(
        <div className="edu">
            <h2>{name}</h2>
            <br/>
            <h1>{gradYear}</h1>
            <br/>
            <h3>{place}</h3>
        </div>
    )
}

const Pick = ({pick}) => {
    return(
    <div className="pick">{pick}</div>
    )
}

