// React Imports
import React from 'react'

// Node Modules Import

// Styles & Images Import
import s from './index.module.scss'

// Component Imports

const Controls = (props) => {
    const { active, onClickHandler } = props;
  
    return (
      <ul className={s.vcControls}>
        <li
          id="play"
          className={`${s.vcControlplay} ${active==='play' ? s.vcControlActive : ""}`}
          onClick={onClickHandler}
        >
          Play<span></span>
        </li>
        <li
          id="rew"
          onClick={onClickHandler}
          className={`${active==='rew' ? s.vcControlActive : ""}`}
        >
          Rew<span></span>
        </li>
        <li
          id="ff"
          onClick={onClickHandler}
          className={`${active==='ff' ? s.vcControlActive : ""}`}
        >
          FF<span></span>
        </li>
        <li
          id="stop"
          onClick={onClickHandler}
          className={`${active==='stop' ? s.vcControlActive : ""}`}
        >
          Stop<span></span>
        </li>
        <li
          onClick={onClickHandler}
          className={`${active==='switch' ? s.vcControlActive : ""}`}
          id="switch"
        >
          Switch<span></span>
        </li>
      </ul>
    );
  }
export default Controls;


