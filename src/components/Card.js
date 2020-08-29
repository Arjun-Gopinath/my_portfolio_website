import React,{Component} from 'react'
import  './css/Card.css'


export default class Card extends Component{   

    openWin = (links) => {
        return(
            window.open(links)
        )
    }

    render(){
        return(
            <div className="card">
                <img src={this.props.psrc} alt="Card Image" className="Image"/>
                <div className="ptext">
                    <h4>{this.props.ptext}</h4>
                </div>
                <input id="gitbutton" type="button" value="View on Github" onClick={() => this.openWin(this.props.plink)}/>
            </div>
        )
    }
}
