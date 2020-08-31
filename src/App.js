import React,{useState,Component} from 'react'
import Back from './components/Back'
import './static/css/App.css'
import Footer from './components/Footer'
import {FaArrowCircleUp} from 'react-icons/fa';

class App extends Component{

  render(){
    return (
      <div className="appclass">
        <Back/>
        <Footer/>
        <a className="gotop" href="/">
        <ScrollArrow/>
        </a>
      </div>
     )  
  }
}

export default App

const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40,display: showScroll ? 'flex' : 'none'}}/>
  );
}
