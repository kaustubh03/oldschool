import React, { Component } from "react";

// Node Modules Import

// Styles & Images Import
import s from "./index.module.scss";


class Speaker extends Component {
  state = {
    nodes: {},
  };
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
        <div className={s.outerSpeaker}>
            <div className={s.innerSpeaker}></div>
            <div className={s.coreSpeaker}></div>
        </div>
    );
  }
}
export default Speaker;


