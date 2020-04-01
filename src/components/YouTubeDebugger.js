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

  bitrateUpdater = () => {
    // this.setState({
    //   settings: {
    //     ...this.state.settings,
    //     bitrate: 12
    //   }
    // })
    this.setState((prevState) => ({
      settings: {
        ...prevState.settings,
        bitrate: 12
        }
      })
      )
    }
    
    resolutionUpdater = () => {
      this.setState((prevState) => ({
        settings: {
          ...prevState.settings,
          video: {
            ...prevState.settings.video, 
            resolution: '720p'
          }
        }
      }))
    }
    
    render() {

    return (
      <div>
        <button className="bitrate" onClick={this.bitrateUpdater}>Change Bit</button>
        <button className="resolution" onClick={this.resolutionUpdater}>Change Res</button>
      </div>
    )
  }

}

export default YouTubeDebugger