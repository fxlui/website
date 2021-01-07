import React from "react"

import styles from "./sidebar.module.css"

export default function Sidebar({ children }) {
  
  return (
    <div className="sidebar" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        margin: `0 auto`,
        display: `flex`,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 46px', 
      }}>
      <div style={{ flex: 1, position: 'relative'}}>
        <a href="#">
          <svg
            className={styles.logo}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 288 388"
            style={{ width: '38px', marginTop: '52px' }}
            alt="Eric Liu"
          >
            <path className={styles.blue} d="M76 329V59H0v270h75v59h213v-59H76z"/>
            <path className={styles.black} d="M0 0v59h279V0zm76 214h177v-58H76z"/>
            <path className={styles.block} d="M0 329h76v59H0z"/>
          </svg>
        </a>
      </div>
      <div className={styles.navs}>{children}</div>
      <div className="bottom" style={{ flex: 1 }}></div>
    </div>
  )
}