import React from "react"

import styled from "styled-components"
import styles from "./icon-button.module.css"

export default function IconButton({ enabled, reg, hov, highlight, link }) {
  const [status, setStatus] = React.useState(enabled)

  React.useEffect(() => {
    setStatus(enabled)
  }, [enabled])

  return (
    <a className={styles.button} href={`#${link}`} onClick={() => setStatus(true)}>
      <div
        className={status ? styles.shownSpecial : styles.shown}
        style={status && highlight ? { color: highlight } : null}
      >
        {status ? hov : reg}
      </div>
      <div className={status ? styles.hiddenSpecial : styles.hidden}
        style={highlight ? { color: highlight } : null}
      >
        {status ? reg : hov}
      </div>
    </a>
  )
}