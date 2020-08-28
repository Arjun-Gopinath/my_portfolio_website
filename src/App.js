import React,{Component} from 'react'
import Back from './components/Back'
import './App.css'
import Footer from './components/Footer'

class App extends Component{
  render(){
    return (
      <div className="appclass">
      <Back/>
      <Footer/>
      </div>
     )  
  }
}

export default App
