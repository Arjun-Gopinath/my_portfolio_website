import React,{Component} from 'react'
import '../static/css/Card.css'


export default class Card extends Component{   

    openWin = (links) => {
        return(
            window.open(links)
        )
    }

    render(){
        return(
            <div className="column">
                <div className="card">
                    <img src={this.props.psrc} alt="Card Images" className="Image"/>
                    <div className="ptext">
                        <h2>{this.props.ptitle}</h2>
                        <h4>{this.props.ptext}</h4>
                    </div>
                    <input id="gitbutton" type="button" value="View on Github" onClick={() => this.openWin(this.props.plink)}/>
                </div>
            </div>
        )
    }
}
