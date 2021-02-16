import React from "react"

import styled from 'styled-components'
import Section from '../section.js'
import styles from './about.module.css'
import { IoAtOutline } from "react-icons/io5";

const StyledText = styled.p`
  font-family: "Roboto Mono", monospace;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5em;
  margin-top: 5px;
  max-width: 700px;
`

export default function Contact({ id, setter }) {
  
  return (
    <Section id={id} setter={setter}>
      <div className={styles.content} style={{
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <p className="title" style={{ fontWeight: 'bold', paddingBottom: '0.5em' }}>Contact Me</p>
        <div className="paragraph">
          <StyledText>
            You can reach me at&nbsp;
            <a
              href="mailto:hi@fxlui.com"
              className="clickable"
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              hi<IoAtOutline />fxlui.com</a>
              &nbsp;anytime.
          </StyledText>
        </div>
      </div>
    </Section>
  )
}