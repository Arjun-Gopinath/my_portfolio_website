import React from 'react'
import '../static/css/About.css'

const About = () => {
    return (
        <div className="abtform">
            <form action="mailto:arjungopinath06@gmail.com" 
            method="POST"enctype="multipart/form-data" 
            className="EmailForm">
                <div className="subrow">
                    <h1>Name:</h1>
                    <input type="text" size="29" className="ContactName"/>
                </div>
                <div className="subrow">
                    <h1>Message:</h1> 
                    <textarea className="ContactComment" rows="6" cols="29"> </textarea>
                </div>
                <input type="submit" value="Submit" className="btn"/>
            </form>
        </div>
    )
}

export default About
