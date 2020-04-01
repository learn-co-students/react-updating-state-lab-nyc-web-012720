import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            let newClick = prevState.timesClicked + 1
            return { 
                timesClicked: newClick
            }
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
    
}