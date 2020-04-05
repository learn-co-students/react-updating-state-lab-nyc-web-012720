// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleIncreseBitrate = () => {
        const updateBitrate = { 
            settings: {...this.state.settings, bitrate: 12} 
        }

        this.setState(updateBitrate)
    }

    handleLowerResolution = () => {     
        const updateResolution = {
            settings: {...this.state.settings, video: {...this.state.settings.video, resolution: '720p'}}
        }

        this.setState(updateResolution) 
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleIncreseBitrate}>Increase Bitrate</button>
                <button className='resolution' onClick={this.handleLowerResolution}>Lower Resolution</button>
            </div>                        
        )
    }
}

export default YouTubeDebugger
