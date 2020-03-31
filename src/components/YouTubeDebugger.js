// Code YouTubeDebugger Component Here

import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
    this.handleClickBit = this.handleClickBit.bind(this);
    this.handleClickRes = this.handleClickRes.bind(this);
  }

  handleClickBit() {
    this.setState(previousState => {
      return {
        settings: {
          bitrate: 12,
          video: {
            ...previousState.settings.video
          }
        }
      };
    });
  }

  handleClickRes() {
    this.setState(previousState => {
      return {
        settings: {
          ...previousState.settings,
          video: {
            resolution: "720p"
          }
        }
      };
    });
  }
  render() {
    return (
      <div>
        <div>
          <button className="bitrate" onClick={this.handleClickBit}>
            bitrate
          </button>
        </div>
        <div>
          <button className="resolution" onClick={this.handleClickRes}>
            resolution
          </button>
        </div>
      </div>
    );
  }
}
