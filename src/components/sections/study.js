import React from "react"

import {
  SiJava,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";

import Tooltip from '@material-ui/core/Tooltip'
import styled from 'styled-components'
import Section from '../section.js'
import styles from './study.module.css'

const StyledText = styled.p`
  font-family: "Roboto Mono", monospace;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5em;
  margin-top: 5px;
  max-width: 700px;
`

const StyledList = styled.ul`
  list-style-type: square;
  font-family: "Roboto Mono", monospace;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5em;
  margin-top: 5px;
`

const StyledSubList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  line-height: 1.5em;
  li:before {
    content: "-";
    padding-right: 8px;
  }
`

export default function Study({ id, setter }) {
  const CourseLink = ({ code } ) => (
    <a
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.handbook.unsw.edu.au/undergraduate/courses/${new Date().getFullYear()}/${code}`}
    >
      {code}
    </a>
  )

  return (
    <Section id={id} setter={setter}>
      <div className={styles.content} style={{
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <p className="title" style={{ fontWeight: 'bold', paddingBottom: '0.5em' }}>Studies</p>
        <div className={`${styles.textblock} paragraph`}>
          <StyledText  style={{ marginBottom: 0 }}>
            I am currently in my third and final year in&nbsp;
            <a
              className={styles.link}
              href={`https://www.handbook.unsw.edu.au/undergraduate/programs/${new Date().getFullYear()}/3778`}
              target="_blank"
              rel="noopener noreferrer"
            >
              B. Computer Science
            </a>.
          </StyledText>
          <StyledText style={{ marginTop: 0 }}>
            Here are some of the courses I've taken:
          </StyledText>
        </div>
        <StyledList className={`${styles.courses} paragraph`}>
          <li>
            <Tooltip title="Mark: 95 HD" placement="right">
              <span><SiJava style={{ paddingRight: '0.5rem' }}/><CourseLink code="COMP2511" /><span style={{ fontSize: '80%' }}> Object-Oriented Programming</span></span>
            </Tooltip>
            <StyledSubList>
              <li className={styles.sub}>Develop Java-based applications using OO design</li>
            </StyledSubList>
          </li>
          <li>
            <Tooltip title="Mark: 92 HD" placement="right">
              <span><SiPostgresql style={{ paddingRight: '0.5rem' }}/><CourseLink code="COMP3311" /><span style={{ fontSize: '80%' }}> Database Systems</span></span>
            </Tooltip>
            <StyledSubList>
              <li className={styles.sub}>Designing and implementing PostgreSQL databases</li>
            </StyledSubList>
          </li>
          <li>
            <Tooltip title="Mark: 88 HD" placement="right">
              <span><SiPython style={{ paddingRight: '0.5rem' }}/><CourseLink code="COMP1531" /><span style={{ fontSize: '80%' }}> Software Eng Fundamentals</span></span>
            </Tooltip>
            <StyledSubList>
              <li className={styles.sub}>Developing a Python-based backend with Agile approach</li>
            </StyledSubList>
          </li>
          <li>
            <Tooltip title="Mark: 86 HD" placement="right">
              <span><SiJavascript style={{ paddingRight: '0.5rem' }}/><CourseLink code="COMP6080" /><span style={{ fontSize: '80%' }}> Web Front-end Programming</span></span>
            </Tooltip>
            <StyledSubList>
              <li className={styles.sub}>Creating front-ends using HTML/CSS and React</li>
            </StyledSubList>
          </li>
          <li>
            <Tooltip title="Mark: 83 DN" placement="right">
              <span><SiFigma style={{ paddingRight: '0.5rem' }}/><CourseLink code="COMP3511" /><span style={{ fontSize: '80%' }}> Human Computer Interaction</span></span>
            </Tooltip>
            <StyledSubList>
              <li className={styles.sub}>Leading a team to design a product with UI/UX in mind</li>
            </StyledSubList>
          </li>
        </StyledList>
      </div>
    </Section>
  )
}