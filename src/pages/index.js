import React from "react"

import styles from "./index.module.css"

import styled from "styled-components"
import Sidebar from '../components/sidebar.js'
import Nav from '../components/nav.js'

import Home from '../components/sections/home.js'
import About from '../components/sections/about.js'
import Study from '../components/sections/study.js'

// styles
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}

const Container = styled.div`
  margin: 0;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  height: 100%;
  display: flex;
`

const Sections = styled.div`
  margin-left: 46px;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`

const Dots = styled.div`
  position: absolute;
  display: inline;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: #fcfcff;
  background-image: radial-gradient(circle at 2px 2px, ${props => props.dot} 1px, transparent 0);
  background-size: 22px 22px;
  z-index: -99;
  transition: 0.5s;
`

// markup
const IndexPage = () => {
  const [sec, setSec] = React.useState('');
  const [dark, setDark] = React.useState(false);
  const [bgColour, setBgColour] = React.useState(styles.none);
  const [dotColour, setDotColour] = React.useState('#e9ecef');

  React.useEffect(() => {
    console.log(sec)
    switch (sec) {
      case "about":
        setBgColour(styles.lightblue)
        break;
      case "contact":
        setBgColour(styles.darkblue)
        setDark(true)
        break;
      default:
        setBgColour(styles.none)
        setDark(false)
        break;
    }
  }, [sec])

  return (
    <>
      <title>Home Page</title>
      <Dots className={bgColour} dot={dotColour} />
      <Sidebar d={dark} >
        <Nav status={sec} darkmode={dark} />
      </Sidebar>
      <Container className={styles.body}>
        <div className={styles.spacer} style={{
          flex: 1,
          minWidth: '130px',
        }}/>
        <main style={{
          color: dark ? "#EFF6EE" : "#232129",
          flex: 9,
        }}>
          <Sections className={styles.sections}>
            <Home id="home" setter={setSec}/>
            <About id="about" setter={setSec}/>
            <Study id="studies" setter={setSec}/>
          </Sections>
        </main>
      </Container>
    </>
  )
}

export default IndexPage
