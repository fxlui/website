import React from "react"

import Section from '../section.js'
import styles from './home.module.css'
import VisibilitySensor from "react-visibility-sensor";

export default function Home({ id, setter }) {
  
  return (
    <Section id={id} setter={setter} >
      <div style={{
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute',
          top: '52px',
          right: '46px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '38px',
        }}>
          Social Icons
        </div>
        <h3 style={{ margin: 0, fontSize: '2em', fontWeight: 500 }}>Hi 👋, my name is</h3>
        <h1
          className="blackhover"
          style={{
            margin: '0',
            fontSize: '8em',
            lineHeight: 1,
        }}>
          Eric&nbsp;
          <span
            className="bluehover"
            style={{ margin: 0, color: '#0496ff', fontWeight: 700 }}>
              Liu
            </span>
          .</h1>
        <p style={{
          fontFamily: "'Roboto Mono', monospace",
          margin: '5px 0 0 0',
          fontSize: '1em',
          fontWeight: 500,
        }}>
          <a href="#test" className="clickable">Scroll down</a>
          &nbsp;to find out more about me.</p>
      </div>
    </Section>
  )
}