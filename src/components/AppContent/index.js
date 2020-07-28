import React, { Component } from 'react'

// Node Modules Import

// Styles & Images Import
import s from './index.module.scss';
import cassette from "../../images/cassette.svg";

// Component Imports
import Speaker from "../Speaker";
import Controls from '../Controls';

class AppContent extends Component {
  state = {
    currentMode: null,
  };

  componentDidMount() {
     this.audioRef = React.createRef();
  }

  componentWillUnmount() {}

  onControlClick = (e) => {
    let type = e.target.id;
    this.setState({ currentMode: type },()=>{
      setTimeout(()=>{
        if(type==='stop'){
          this.setState({ currentMode: null });
        }
      }, 200)
    });
    switch(type){
      case "play":
          //
        break;
      default:
        break;
    }
  };

  render() {
    const { currentMode } = this.state;
    return (
      <div className={s.parent}>
        <div className={s.title}>
          <span>oldschool Cassette Player</span>
          <span>Pure HTML/SASS Example on React</span>
        </div>
        <div className={s.player}>
          <div className={s.player__head} />
          <div className={s.player__body}>
            <div className={s.player__body__speaker}>
              <Speaker />
            </div>
            <div className={s.player__body__cassetteHolder}>
              <div className={s.player__body__cassetteHolder__cassette}>
                <div
                  className={s.player__body__cassetteHolder__cassette__shutter}
                />
                <div
                  className={
                    s.player__body__cassetteHolder__cassette__opaqueShutter
                  }
                />
                <img src={cassette} alt="" />
              </div>
              <div className={s.player__body__cassetteHolder__controls}>
                <Controls
                  onClickHandler={this.onControlClick}
                  active={currentMode}
                />
              </div>
            </div>
            <div className={s.player__body__speaker}>
              <Speaker />
            </div>
            <div className={s.player__body__volumeControl}>
              <div className={s.knob}>
                {" "}
                <div
                  className={s.top}
                  style={{ transform: "rotate(0deg)" }}
                ></div>{" "}
                <div className={s.base}></div>{" "}
              </div>
              <audio
                id="audio"
                ref={this.audioRef}
                src="http://dev.interactive-creation-works.net/1/1.ogg"
              ></audio>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AppContent;


