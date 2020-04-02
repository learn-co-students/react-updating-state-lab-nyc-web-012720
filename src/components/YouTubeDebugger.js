// Code YouTubeDebugger Component Here

import React, {Component} from 'react' 
class YouTubeDebugger extends Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: { 
                  resolution: '1080p'
                }}}}

    changeBitrate = () => {
        // console.log(this.state.settings.bitrate)
        this.setState({
            settings: {...this.state.settings, bitrate:12 } 
        })    
    }
    changeResolution = () =>{
      // let resolutionNew = this.state.settings.video
      let resolutionNew = '720p'
      // let video = {resolution: resolutionNew}
      // console.log(video)
        this.setState({
            settings:{ ...this.state.settings, video:{resolution: resolutionNew}}
        })
    }
       
    render(){
      console.log(this.state.settings.video)
        return (
            <div>
                <div>
                    <button className='bitrate' onClick={this.changeBitrate}>
                        {this.state.settings.bitrate}
                    </button>
                </div>

                <div>
                    <button className='resolution' onClick={this.changeResolution}>
                        {this.state.settings.video.resolution}
                    </button>
                 </div> 
            </div>
        )
    }
}

export default YouTubeDebugger
