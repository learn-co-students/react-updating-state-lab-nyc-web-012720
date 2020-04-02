// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

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

  constructor(props) {
    super(props);
  }

  bitHandleClick = () =>{
    this.setState({settings: {
        ...this.state.settings,
        bitrate: 12
    }})
  }

  resHandleClick = () =>{
    this.setState({settings: {
        ...this.state.settings,
        video: {resolution: "720p"}
    }})
  }

  render() {
    return (
    <div>
        <button className="bitrate" type="button" onClick = {this.bitHandleClick}>{this.state.settings.bitrate}</button>
        <button className="resolution" type="button" onClick = {this.resHandleClick}>{this.state.settings.video.resolution}</button>
    </div>
    );
  }
}

export default YouTubeDebugger;
