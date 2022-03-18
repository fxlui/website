import React from "react";

import styled from "styled-components";
import Section from "../section.js";
import IconButton from "../icon-button.js";

import styles from "./home.module.css";

import { IoLogoGithub, IoMail } from "react-icons/io5";

const Spacer = styled.div`
  height: 50px;
  width: 20px;
`;

export default function Home({ id, setter }) {
  React.useEffect(() => setter(id), []);

  return (
    <Section id={id} setter={setter}>
      <div
        className={styles.container}
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <p className="title">Hi 👋, my name is</p>
          <p className="emphasis blackhover">
            Eric&nbsp;
            <span
              className="bluehover"
              style={{ margin: 0, color: "#0496ff", fontWeight: 700 }}
            >
              Liu
            </span>
            .
          </p>
          <p
            className="paragraph"
            style={{
              fontFamily: "'Roboto Mono', monospace",
              margin: "5px 0 0 0",
              fontSize: "1em",
              fontWeight: 500,
            }}
          >
            <a href="#about" className="clickable">
              Scroll down
            </a>
            &nbsp;to find out more about me.
          </p>

          <p
            className="paragraph"
            style={{
              paddingTop: "0.5rem",
              fontFamily: "'Roboto Mono', monospace",
              margin: "5px 0 0 0",
              fontSize: "1em",
              fontWeight: 500,
            }}
          >
            There's&nbsp;
            <a href="https://about.fxlui.com" className="clickable">
              a new version of this website
            </a>
            !
          </p>
          <div
            className={styles.socials}
            style={{
              position: "absolute",
              top: "52px",
              right: "46px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "38px",
            }}
          >
            <IconButton
              title="GitHub"
              link="https://github.com/fxlui"
              reg={<IoLogoGithub />}
            />
            <Spacer />
            <IconButton
              title="Email"
              link="mailto:hi@fxlui.com"
              reg={<IoMail />}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
