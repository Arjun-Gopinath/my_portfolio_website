import React from 'react'
import image1 from '../static/images/On-Load.png'
import image2 from '../static/images/iedc.png'
import image5 from '../static/images/saparya.png'
import Card from './Card'
import '../static/css/Projects.css'

const Projects = () => {
    return (
        <>
            <h1>MY PROJECTS</h1>
        <div className="projcontainer">
            <Card
                psrc={image1}
                plink='https://github.com/Arjun-Gopinath/flutter-chicken'
                ptitle="Flutter Chicken App" 
                ptext="A user and admin native 
                app built to receive orders for chicken from users and 
                provide necessary details to the admin. 
                The app was developed for a startup company"
            />
            <Card
                psrc={image2}
                plink='https://github.com/Arjun-Gopinath/EDC-Website'
                ptitle="iEDC Website" 
                ptext=" Helped in the development of iEDC website as a 
                Tricodia Web Development Intern"
            />  
            <Card
                psrc={image1}
                plink='https://github.com/Arjun-Gopinath/Echo'
                ptitle="Echo - Music Player" 
                ptext=" Developed an Android Music Player while doing 
                training at Internshala"
            />
            <Card
                psrc={image1}
                plink='https://github.com/Arjun-Gopinath/Vuforia-AR-THUNT'
                ptitle="Da Vinci Code - AR Treasure Hunt" 
                ptext=" An AR-based treasure hunt developed with Unity 3D 
                and Vuforia for Dyuksha 18. Uses a plane detection mechanism"
            />
            <Card
                psrc={image5}
                plink='https://github.com/Arjun-Gopinath/College-Fest'
                ptitle="Saparya20 - Static HTML5 Website" 
                ptext="A static website developed for accepting registration
                 for College Fest and deployed with Netlify"
            />
            <Card
                psrc={image1}
                plink='https://github.com/Arjun-Gopinath/Used-Car-Price-Predictor'
                ptitle="Price Foreteller for used cars" 
                ptext="A machine learning based model that can be used to 
                predict the price of your used car"
            />      
        </div>
        </>
    )
}

export default Projects