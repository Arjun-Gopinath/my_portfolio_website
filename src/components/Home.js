import React from 'react'
import './css/Home.css'
import propic from '../images/propic.png'

const Home = () => {
    var i = 0;
    var txt = 'If you are seeing this you have entered ARJUN G\'s webpage, a BTech graduate and an aspiring web-developer.'; 
    var speed = 100; /* The speed/duration of the effect in milliseconds */
    
    function type() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    return (
        <div className="homecontainer" onLoad={() => type()}>
            <div className="Propic" >
                <img src={propic} alt="Propic"/>
            </div>
            <div className="homedesc">
                <h1 id="demo"></h1>
            </div>
            
        </div>
    )
}

export default Home


