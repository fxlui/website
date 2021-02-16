import React from "react"

import styled from 'styled-components'
import Section from '../section.js'
import styles from './about.module.css'

const StyledText = styled.p`
  font-family: "Roboto Mono", monospace;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5em;
  margin-top: 5px;
  max-width: 700px;
`

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style-type: square;
  font-family: "Roboto Mono", monospace;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5em;
  margin-top: 5px;
  max-width: 350px;
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
        <div className={styles.content}>
          <div className={styles.textblock}>
            <StyledText>
              Hi! I'm Eric Liu, a Computer Science student @ UNSW based in Sydney, AU <span style={{ fontSize: '0.8em' }}>(and sometimes other places)</span>.
            </StyledText>
            <StyledText>
              I love making stuff for the Internet, from Discord bots to apps and anything in between.
            </StyledText>
            <StyledText>
              Here are the technologies I've worked with:
            </StyledText>
          </div>
          <StyledList>
            <li>Python</li>
            <li>Javascript (React)</li>
            <li>HTML & CSS</li>
            <li>SQL (PostgreSQL)</li>
            <li>Java</li>
            <li>C</li>
          </StyledList>
        </div>
      </div>
    </Section>
  )
}