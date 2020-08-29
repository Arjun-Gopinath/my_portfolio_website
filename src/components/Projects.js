import React from 'react'
import image1 from '../images/Logo.svg'
import Card from './Card'
import './css/Projects.css'

const Projects = () => {
    return (
        <>
        <div>
            <h1>My Projects</h1>
        </div>
        <div className="projcontainer">
            <Card
                psrc={image1}
                plink='https://www.youtube.com'
                ptext="Simple Card"
            />
            <Card
                psrc={image1}
                plink='https://www.google.com'
                ptext="Simple Card"
            />  
            <Card
                psrc={image1}
                plink='https://www.youtube.com'
                ptext="Simple Card"
            />      
        </div>
        </>
    )
}

export default Projects