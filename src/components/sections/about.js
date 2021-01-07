import React from "react"

import Section from '../section.js'
import styles from './home.module.css'
import VisibilitySensor from "react-visibility-sensor";

export default function About({ id, setter }) {
  
  return (
    <Section id={id} setter={setter}>
      <div style={{
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <h1
          className="blackhover"
          style={{
            margin: '0',
            fontSize: '8em',
            lineHeight: 1,
        }}>
          Pain
        </h1>
        <p style={{
          fontFamily: "'Roboto Mono', monospace",
          margin: '5px 0 0 0',
          fontSize: '1em',
          fontWeight: 500,
        }}>
          <a href="#home" className="clickable">Scroll down</a>
          &nbsp;to find out more about me.</p>
      </div>
    </Section>
  )
}