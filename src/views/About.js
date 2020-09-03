import React, { Component } from 'react'
import '../static/css/About.css'

class About extends Component{
    state = {
        name :'',
        content:'',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] :e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
    
    render(){
        return (
            <div className="abtform">
                <h1>Let me know what you think about my works, including this website!!</h1>
                <form action="mailto:arjungopinath06@gmail.com" 
                method="POST"enctype="multipart/form-data"
                onSubmit = {this.handleSubmit} 
                className="EmailForm">
                    <div className="subrow">
                        <label htmlFor="name">Name :</label>
                        <input type="text" size="29" 
                        className="ContactName" id="name"
                        onChange={this.handleChange}/>
                    </div>
                    <div className="subrow">
                        <label htmlFor="content">Message :</label> 
                        <textarea className="ContactComment" 
                        rows="6" cols="29" id ="content" 
                        onChange={this.handleChange}></textarea>
                    </div>
                    <input type="submit" value="Submit" className="btn"/>
                </form>
            </div>
        )
    }
}

export default About
