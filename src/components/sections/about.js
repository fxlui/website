import React from "react"

import styled from 'styled-components'
import Section from '../section.js'
import styles from './home.module.css'
import VisibilitySensor from "react-visibility-sensor"

const StyledText = styled.p`
  font-family: "Roboto Mono", monospace;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5em;
  margin-top: 5px;
  max-width: 700px;
`

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
        <h3 style={{ paddingBottom: '0.5em' }}>About Me</h3>
        <StyledText>
          Hi! I'm Eric Liu, a Computer Science student based in Sydney, AU.
        </StyledText>
        <StyledText>
          Here are the technologies blab:
        </StyledText>
      </div>
    </Section>
  )
}