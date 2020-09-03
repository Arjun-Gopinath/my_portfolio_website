import React,{Component} from 'react'
import Back from './views/Back'
import './static/css/App.css'
import Footer from './views/Footer'

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
