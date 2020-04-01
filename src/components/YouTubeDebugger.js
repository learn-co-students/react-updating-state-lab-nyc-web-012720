import React from 'react';

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    handleBitClick = () => {
        this.setState({
            settings: {
            ...this.state.settings,
            bitrate: 12
            }
        })
    }

    handleResClick = () => {
        this.setState({
            settings: {
            ...this.state.settings,
                video: {
                ...this.state.settings.video,
                    resolution: '720p'
            }
            }
        })
    }


    render() {
        console.log(this.state)
        return(
            <div>
                <button className='bitrate' onClick={this.handleBitClick}>cool beans</button>
                <button className='resolution' onClick={this.handleResClick}>cool beans two</button>
            </div>
        )
    }

}
