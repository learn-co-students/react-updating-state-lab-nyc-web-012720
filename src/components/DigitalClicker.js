// Code DigitalClicker Component Here

import React, {Component} from 'react'

class DigitalClicker extends Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClik = () => {
        this.setState(previousState => {
            return{timesClicked: previousState.timesClicked + 1}
        })
    }

    render(){
        return(

            <div>
                <button onClick={this.handleClik}>
                    {this.state.timesClicked}
                </button>
            </div>
        )
    }
}

export default DigitalClicker
