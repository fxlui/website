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
  height: 100vh;
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
  background-image: radial-gradient(circle at 2px 2px, #e9ecef 1px, transparent 0);
  background-size: 22px 22px;
  z-index: -99;
`

// markup
const IndexPage = () => {
  const [sec, setSec] = React.useState('');

  React.useEffect(() => {
    console.log(sec)
  }, [sec])

  return (
    <>
      <title>Home Page</title>
      <Dots />
      <Sidebar>
        <Nav status={sec} />
      </Sidebar>
      <Container className={styles.body}>
        <div className={styles.spacer} style={{
          flex: 1,
          minWidth: '130px',
        }}/>
        <main style={{
          color: "#232129",
          flex: 9,
        }}>
          <Sections className={styles.sections}>
            <Home id="home" setter={setSec} />
            <About id="about" setter={setSec} />
            <Study id="study" setter={setSec} />
          </Sections>
        </main>
      </Container>
    </>
  )
}

export default IndexPage
