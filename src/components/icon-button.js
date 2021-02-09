import React from "react"

import Tooltip from '@material-ui/core/Tooltip';
import styles from "./icon-button.module.css"

export default function IconButton({ enabled, reg, hov, highlight, link, title }) {
  const [status, setStatus] = React.useState(enabled)
  const [fader, setFader] = React.useState('')

  React.useEffect(() => {
    if (status !== enabled) {
      setFader(styles.fader)
      setTimeout(() => {
        setFader('')
        setStatus(enabled)
      }, 250)
    }
  }, [enabled])

  const isLocalLink = (link === undefined || link.charAt(0) === '#')

  return (
    <Tooltip title={title} placement={hov ? "right" : "bottom"}>
      <a
        className={styles.button}
        href={link}
        onClick={hov ? () => setStatus(true) : null}
        alt={title}
        target={isLocalLink ? null : "_blank"}
        rel={isLocalLink ? null : "noopener noreferrer"}
        style={isLocalLink ? null : { height: 'auto' }}
      >
        <div
          className={!status && !hov ? styles.static : (status ? `${styles.shownSpecial} ${fader}` : `${styles.shown} ${fader}`) }
          style={status && highlight ? { color: highlight } : null}
        >
          {status ? hov : reg}
        </div>
        {hov ? <div className={status ? `${styles.hiddenSpecial} ${fader}` : `${styles.hidden} ${fader}`}
          style={highlight ? { color: highlight } : null}
        >
          {status ? reg : hov}
        </div> : null }
      </a>
    </Tooltip>
  )
}