import React from "react"

import styles from "./sidebar.module.css"

export default function Sidebar({ d, children }) {
  
  return (
    <div className={styles.sidebar}>
      <div style={{ flex: 1, position: 'relative'}}>
        <a href="#home">
          <svg
            className={styles.logo}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 288 388"
            style={{ width: '38px', marginTop: '52px', zIndex: 2 }}
            alt="Eric Liu"
          >
            <path className={styles.blue} d="M76 329V59H0v270h75v59h213v-59H76z"/>
            <path className={d ? styles.white : styles.black} d="M0 0v59h279V0zm76 214h177v-58H76z"/>
            <path className={d ? styles.white : styles.block} d="M0 329h76v59H0z"/>
          </svg>
        </a>
      </div>
      <div className={styles.navs}>{children}</div>
      <div className="bottom" style={{ flex: 1 }}></div>
    </div>
  )
}